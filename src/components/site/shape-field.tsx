import { useEffect, useRef } from "react";

const shapes = [
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-a.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-b.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
  "/shapes/blob-c.svg",
];

const parallaxFactor = 1 / 20;
const friction = 0.94;
const bounce = 0.7;
const grabBlockers =
  "a, button, input, textarea, select, label, img, video, dialog, .showcase, .reel, .case-screens, .case-story__decision, .archive__card, .case-next";

type ShapeState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  dragging: boolean;
  pinned: boolean;
  lastX: number;
  lastY: number;
  lastTime: number;
};

// The triangles follow the mouse slightly until one is grabbed; after that it
// stays wherever it's dragged or flung.
export function ShapeField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) {
      return;
    }
    const elements = Array.from(field.querySelectorAll<HTMLElement>(".shape"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const states: ShapeState[] = elements.map(() => ({
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      spin: 0,
      dragging: false,
      pinned: false,
      lastX: 0,
      lastY: 0,
      lastTime: 0,
    }));
    const parallax = { x: 0, y: 0 };
    let frame = 0;

    function parallaxFor(index: number) {
      const direction = index % 2 !== 0 ? -1 : 1;
      return { x: parallax.x * direction, y: parallax.y * direction };
    }

    function render() {
      elements.forEach((element, index) => {
        const state = states[index];
        const offset = state.pinned ? { x: 0, y: 0 } : parallaxFor(index);
        element.style.transform = `translate(${offset.x + state.x}px, ${
          offset.y + state.y
        }px) rotate(${state.spin}deg)`;
      });
    }

    function tick() {
      let moving = false;
      states.forEach((state, index) => {
        if (state.dragging || Math.abs(state.vx) + Math.abs(state.vy) < 0.05) {
          return;
        }
        moving = true;
        state.x += state.vx;
        state.y += state.vy;
        state.spin += state.vx * 0.8;
        state.vx *= friction;
        state.vy *= friction;

        const rect = elements[index].getBoundingClientRect();
        if ((rect.left < 0 && state.vx < 0) || (rect.right > window.innerWidth && state.vx > 0)) {
          state.vx *= -bounce;
        }
        if ((rect.top < 0 && state.vy < 0) || (rect.bottom > window.innerHeight && state.vy > 0)) {
          state.vy *= -bounce;
        }
      });
      render();
      frame = moving ? requestAnimationFrame(tick) : 0;
    }

    function startTicking() {
      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    }

    let active: { index: number; pointerId: number } | null = null;
    let hovered = -1;

    function shapeAt(x: number, y: number) {
      for (let index = elements.length - 1; index >= 0; index -= 1) {
        const rect = elements[index].getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          return index;
        }
      }
      return -1;
    }

    // The triangles sit behind the page, so a press only grabs one when it
    // lands on empty page space, never on a link, button, card, or media.
    function canGrabThrough(target: EventTarget | null) {
      return !(target instanceof Element && target.closest(grabBlockers));
    }

    function setHovered(index: number) {
      if (index === hovered) {
        return;
      }
      elements[hovered]?.classList.remove("is-hovered");
      elements[index]?.classList.add("is-hovered");
      document.documentElement.classList.toggle("shape-hover", index !== -1);
      hovered = index;
    }

    function onMouseMove(event: MouseEvent) {
      if (!active) {
        setHovered(canGrabThrough(event.target) ? shapeAt(event.clientX, event.clientY) : -1);
      }
      if (reduceMotion.matches) {
        return;
      }
      parallax.x = event.clientX * parallaxFactor;
      parallax.y = event.clientY * parallaxFactor;
      if (!frame) {
        render();
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (event.button !== 0 || !canGrabThrough(event.target)) {
        return;
      }
      const index = shapeAt(event.clientX, event.clientY);
      if (index === -1) {
        return;
      }
      event.preventDefault();
      const state = states[index];
      if (!state.pinned) {
        const offset = parallaxFor(index);
        state.x += offset.x;
        state.y += offset.y;
        state.pinned = true;
      }
      Object.assign(state, {
        dragging: true,
        vx: 0,
        vy: 0,
        lastX: event.clientX,
        lastY: event.clientY,
        lastTime: event.timeStamp,
      });
      active = { index, pointerId: event.pointerId };
      setHovered(-1);
      elements[index].classList.add("is-dragging");
      document.documentElement.classList.add("shape-grabbing");
    }

    function onPointerMove(event: PointerEvent) {
      if (!active || event.pointerId !== active.pointerId) {
        return;
      }
      const state = states[active.index];
      const dx = event.clientX - state.lastX;
      const dy = event.clientY - state.lastY;
      const elapsed = Math.max(1, event.timeStamp - state.lastTime);
      state.x += dx;
      state.y += dy;
      state.vx = (dx / elapsed) * 16;
      state.vy = (dy / elapsed) * 16;
      state.lastX = event.clientX;
      state.lastY = event.clientY;
      state.lastTime = event.timeStamp;
      render();
    }

    function onPointerUp(event: PointerEvent) {
      if (!active || event.pointerId !== active.pointerId) {
        return;
      }
      const state = states[active.index];
      state.dragging = false;
      elements[active.index].classList.remove("is-dragging");
      document.documentElement.classList.remove("shape-grabbing");
      active = null;
      if (reduceMotion.matches) {
        state.vx = 0;
        state.vy = 0;
        return;
      }
      startTicking();
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.documentElement.classList.remove("shape-hover", "shape-grabbing");
    };
  }, []);

  return (
    <div className="shapes" ref={fieldRef} aria-hidden>
      {shapes.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          width={80}
          height={60}
          draggable={false}
          className={`shape shape--${index}`}
        />
      ))}
    </div>
  );
}
