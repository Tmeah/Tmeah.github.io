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

type ShapeState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  dragging: boolean;
  lastX: number;
  lastY: number;
  lastTime: number;
};

// The triangles follow the mouse slightly, and can be grabbed, dragged, and
// flung around the screen.
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
      lastX: 0,
      lastY: 0,
      lastTime: 0,
    }));
    const parallax = { x: 0, y: 0 };
    let frame = 0;

    function render() {
      elements.forEach((element, index) => {
        const direction = index % 2 !== 0 ? -1 : 1;
        const state = states[index];
        element.style.transform = `translate(${parallax.x * direction + state.x}px, ${
          parallax.y * direction + state.y
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

    function onMouseMove(event: MouseEvent) {
      if (reduceMotion.matches) {
        return;
      }
      parallax.x = event.clientX * parallaxFactor;
      parallax.y = event.clientY * parallaxFactor;
      if (!frame) {
        render();
      }
    }

    const cleanups = elements.map((element, index) => {
      const state = states[index];

      function onPointerDown(event: PointerEvent) {
        event.preventDefault();
        element.setPointerCapture(event.pointerId);
        element.classList.add("is-dragging");
        Object.assign(state, {
          dragging: true,
          vx: 0,
          vy: 0,
          lastX: event.clientX,
          lastY: event.clientY,
          lastTime: event.timeStamp,
        });
      }

      function onPointerMove(event: PointerEvent) {
        if (!state.dragging) {
          return;
        }
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

      function onPointerUp() {
        if (!state.dragging) {
          return;
        }
        state.dragging = false;
        element.classList.remove("is-dragging");
        if (reduceMotion.matches) {
          state.vx = 0;
          state.vy = 0;
          return;
        }
        startTicking();
      }

      element.addEventListener("pointerdown", onPointerDown);
      element.addEventListener("pointermove", onPointerMove);
      element.addEventListener("pointerup", onPointerUp);
      element.addEventListener("pointercancel", onPointerUp);
      return () => {
        element.removeEventListener("pointerdown", onPointerDown);
        element.removeEventListener("pointermove", onPointerMove);
        element.removeEventListener("pointerup", onPointerUp);
        element.removeEventListener("pointercancel", onPointerUp);
      };
    });

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
      cleanups.forEach((cleanup) => cleanup());
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
