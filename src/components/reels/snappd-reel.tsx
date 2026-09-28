import { ReelStage } from "@/components/reels/reel-stage";
import {
  draw,
  ease,
  enter,
  inOut,
  loopFade,
  maskIn,
  maskOut,
  pop,
  rise,
  stagger,
  type Frame,
  type Track,
} from "@/components/reels/timeline";
import { Icon, type IconName } from "@/components/site/icon";

const qrSize = 13;

function isFinder(x: number, y: number) {
  const inCorner = (cx: number, cy: number) => x >= cx && x < cx + 5 && y >= cy && y < cy + 5;
  return inCorner(0, 0) || inCorner(qrSize - 5, 0) || inCorner(0, qrSize - 5);
}

function finderModule(x: number, y: number) {
  const cx = x < 5 ? x : x - (qrSize - 5);
  const cy = y < 5 ? y : y - (qrSize - 5);
  const ring = cx === 0 || cx === 4 || cy === 0 || cy === 4;
  const centre = cx === 2 && cy === 2;
  return ring || centre;
}

const qrModules = Array.from({ length: qrSize * qrSize }, (_, index) => {
  const x = index % qrSize;
  const y = Math.floor(index / qrSize);
  const on = isFinder(x, y) ? finderModule(x, y) : (x * 7 + y * 11 + x * y * 3) % 5 < 2;
  const distance = Math.round(Math.hypot(x - 6, y - 6));
  return { x, y, on, distance };
}).filter((module) => module.on);

const polaroids = [
  { caption: "the vows ♡", icon: "heart", from: "translate(-40em, -30em) rotate(-40deg)", rotate: -8 },
  { caption: "first dance", icon: "music", from: "translate(10em, -50em) rotate(30deg)", rotate: 6 },
  { caption: "Eid mubarak", icon: "moon", from: "translate(50em, -30em) rotate(50deg)", rotate: -4 },
  { caption: "cake!", icon: "cake-candles", from: "translate(-50em, 30em) rotate(-30deg)", rotate: 5 },
  { caption: "the squad", icon: "user-group", from: "translate(0em, 50em) rotate(20deg)", rotate: -7 },
  { caption: "golden hour", icon: "sun", from: "translate(50em, 40em) rotate(-45deg)", rotate: 9 },
] satisfies ({ icon: IconName } & Record<string, unknown>)[];

const moderation = ["Aisha's upload", "Table 4", "Grandad ♡"];

const cuts = [3.1, 6.6, 10.5, 13.1];

function wipe(): Track {
  const frames: Frame[] = cuts.flatMap((cut) => [
    { at: cut - 0.42, transform: "translateX(-101%)", ease: ease.inOut },
    { at: cut, transform: "translateX(0%)", ease: ease.inOut },
    { at: cut + 0.42, transform: "translateX(101%)" },
    { at: cut + 0.42, transform: "translateX(-101%)" },
  ]);
  return { target: ".sn-wipe", frames: [{ at: 0, transform: "translateX(-101%)" }, ...frames] };
}


const tracks: Track[] = [
  loopFade(".sn-fade"),
  wipe(),

  // Scene 1: every moment, kept
  inOut(".sn-script", 0.3, 2.7, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, {
    inFor: 1.1,
    inEase: ease.inOut,
    exit: { clipPath: "inset(0% 0% 0% 100%)" },
  }),
  ...stagger(2, (index) =>
    inOut(`.sn-s1 .reel-line:nth-child(${index + 1}) > span`, 0.7 + index * 0.2, 2.7, maskIn.hidden, maskIn.shown, {
      inFor: 0.9,
      ...maskOut,
    }),
  ),
  inOut(".sn-camera", 0.65, 2.65, { opacity: 0, transform: "scale(0) rotate(-40deg)" }, { opacity: 1, transform: "scale(1) rotate(-8deg)" }, { inEase: ease.back }),
  inOut(".sn-mark", 1.5, 2.6, { transform: "scaleX(0)" }, { transform: "scaleX(1)" }, { inFor: 0.55, inEase: ease.inOut }),
  ...stagger(3, (index) => ({
    target: `.sn-doodle--${index + 1}`,
    frames: [
      { at: 0.5 + index * 0.3, opacity: 0, transform: "scale(0) rotate(-90deg)", ease: ease.back },
      { at: 1.1 + index * 0.3, opacity: 1, transform: "scale(1) rotate(0deg)", ease: ease.inOut },
      { at: 2.2, opacity: 1, transform: "scale(1.15) rotate(12deg)", ease: ease.in },
      { at: 2.7, opacity: 0, transform: "scale(0) rotate(40deg)" },
    ],
  })),

  // Scene 2: scan, snap, done
  inOut(".sn-s2 .sn-kicker", 3.3, 6.25, rise(1.5).hidden, rise(1.5).shown),
  ...stagger(3, (index) =>
    inOut(`.sn-s2 .reel-line:nth-child(${index + 1}) > span`, 3.45 + index * 0.35, 6.25, maskIn.hidden, maskIn.shown, {
      ...maskOut,
    }),
  ),
  inOut(
    ".sn-qr",
    3.2,
    6.2,
    { opacity: 0, transform: "rotate(-16deg) scale(0.6)" },
    { opacity: 1, transform: "rotate(-4deg) scale(1)" },
    { inEase: ease.back, inFor: 0.8, exit: { opacity: 0, transform: "rotate(6deg) scale(0.9)" } },
  ),
  ...qrModules.map((module) =>
    enter(
      `.sn-qr__module[data-x="${module.x}"][data-y="${module.y}"]`,
      3.4 + module.distance * 0.07,
      { transform: "scale(0)" },
      { transform: "scale(1)" },
      { inFor: 0.35, inEase: ease.back },
    ),
  ),
  {
    target: ".sn-scan",
    frames: [
      { at: 4.3, opacity: 0, transform: "translateY(0em)", ease: ease.inOut },
      { at: 4.45, opacity: 1, transform: "translateY(0em)", ease: ease.inOut },
      { at: 5.1, opacity: 1, transform: "translateY(23em)", ease: ease.inOut },
      { at: 5.7, opacity: 1, transform: "translateY(0em)", ease: ease.inOut },
      { at: 5.85, opacity: 0, transform: "translateY(0em)" },
    ],
  },
  inOut(".sn-check", 5.4, 6.2, pop.hidden, pop.shown, { inEase: ease.back, inFor: 0.5 }),

  // Scene 3: the pile of memories
  inOut(".sn-count", 6.75, 10.1, rise(3).hidden, rise(3).shown),
  {
    target: ".sn-count__num",
    frames: [
      { at: 6.9, "--sn-n": 0, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { at: 9.3, "--sn-n": 300 },
    ],
  },
  inOut(".sn-count__label", 7.0, 10.1, rise(1.5).hidden, rise(1.5).shown),
  ...polaroids.map((polaroid, index) => {
    const start = 6.75 + index * 0.24;
    const rest = `translate(0em, 0em) rotate(${polaroid.rotate}deg) scale(1)`;
    return {
      target: `.sn-pol--${index + 1}`,
      frames: [
        { at: start, opacity: 0, transform: `${polaroid.from} scale(1.3)`, ease: ease.out },
        { at: start + 0.75, opacity: 1, transform: rest, ease: ease.inOut },
        {
          at: 9.8,
          opacity: 1,
          transform: `translate(0em, -0.8em) rotate(${polaroid.rotate * 0.6}deg) scale(1)`,
          ease: ease.in,
        },
        { at: 10.3, opacity: 0, transform: `translate(0em, 12em) rotate(${polaroid.rotate * 2}deg) scale(0.9)` },
      ],
    };
  }),

  // Scene 4: the host curates
  ...stagger(2, (index) =>
    inOut(`.sn-s4 .reel-line:nth-child(${index + 1}) > span`, 10.65 + index * 0.15, 12.85, maskIn.hidden, maskIn.shown, {
      ...maskOut,
    }),
  ),
  inOut(".sn-desk", 10.6, 12.85, { opacity: 0, transform: "translateY(10em) rotate(-6deg)" }, { opacity: 1, transform: "translateY(0em) rotate(-2deg)" }, { inFor: 1 }),
  inOut(".sn-mod", 10.9, 12.85, { opacity: 0, transform: "translateY(6em) rotate(6deg)" }, { opacity: 1, transform: "translateY(0em) rotate(3deg)" }, { inEase: ease.back }),
  ...stagger(moderation.length, (index) =>
    enter(`.sn-mod__tick--${index + 1}`, 11.45 + index * 0.32, pop.hidden, pop.shown, { inEase: ease.back, inFor: 0.45 }),
  ),
  ...stagger(moderation.length, (index) =>
    enter(`.sn-mod__state--${index + 1}`, 11.5 + index * 0.32, { opacity: 0 }, { opacity: 1 }, { inFor: 0.2 }),
  ),

  // Scene 5: lockup
  enter(".sn-logo", 13.2, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { inFor: 0.9, inEase: ease.inOut }),
  enter(".sn-logo-camera", 13.7, { opacity: 0, transform: "scale(0) rotate(-40deg)" }, { opacity: 1, transform: "scale(1) rotate(0deg)" }, { inEase: ease.back }),
  draw(".sn-swoosh path", 13.6, 0.8),
  enter(".sn-url", 13.85, rise(1.5).hidden, rise(1.5).shown),
  enter(".sn-price", 14.0, rise(1.5).hidden, rise(1.5).shown),
  enter(".sn-credit", 14.15, rise(1.5).hidden, rise(1.5).shown),
];

export function SnappdReel() {
  return (
    <ReelStage slug="snappd" name="Snappd" tracks={tracks} posterAt={14.4}>
      <div className="sn">
        <div className="reel-scene sn-s1">
          <span className="sn-doodle sn-doodle--1">✦</span>
          <span className="sn-doodle sn-doodle--2">♡</span>
          <span className="sn-doodle sn-doodle--3">✳</span>
          <p className="sn-script">every moment, kept.</p>
          <p className="sn-title">
            <span className="reel-line">
              <span>
                <Icon name="camera" className="sn-camera" /> Snap it.
              </span>
            </span>
            <span className="reel-line">
              <span>
                <span className="sn-mark-wrap">
                  <span className="sn-mark" />
                  Scrapbook
                </span>{" "}
                it.
              </span>
            </span>
          </p>
        </div>

        <div className="reel-scene sn-s2">
          <div className="sn-copy">
            <p className="sn-kicker">01 · for guests</p>
            <p className="sn-big">
              <span className="reel-line">
                <span>Scan.</span>
              </span>
              <span className="reel-line">
                <span>Snap.</span>
              </span>
              <span className="reel-line">
                <span className="sn-pink">Done.</span>
              </span>
            </p>
          </div>
          <div className="sn-qr">
            <div className="sn-qr__grid">
              {qrModules.map((module) => (
                <span
                  key={`${module.x}-${module.y}`}
                  className="sn-qr__module"
                  data-x={module.x}
                  data-y={module.y}
                  style={{ gridColumn: module.x + 1, gridRow: module.y + 1 }}
                />
              ))}
            </div>
            <span className="sn-scan" />
            <p className="sn-qr__caption">scan me at the party!</p>
          </div>
          <p className="sn-check">
            <Icon name="check" /> No app needed
          </p>
        </div>

        <div className="reel-scene sn-s3">
          <div className="sn-count">
            <p className="sn-count__num" />
            <p className="sn-count__label">guest photos from one wedding</p>
          </div>
          {polaroids.map((polaroid, index) => (
            <figure key={polaroid.caption} className={`sn-pol sn-pol--${index + 1}`}>
              <span className="sn-pol__photo">
                <Icon name={polaroid.icon} />
              </span>
              <figcaption>{polaroid.caption}</figcaption>
              <span className="sn-pol__tape" />
            </figure>
          ))}
        </div>

        <div className="reel-scene sn-s4">
          <p className="sn-big sn-big--small">
            <span className="reel-line">
              <span>You approve</span>
            </span>
            <span className="reel-line">
              <span>
                every <em>photo.</em>
              </span>
            </span>
          </p>
          <div className="sn-desk">
            <div className="sn-desk__bar">
              <i />
              <i />
              <i />
            </div>
            <img src="/projects/snappd.webp" alt="" width={1440} height={830} />
          </div>
          <div className="sn-mod">
            <p className="sn-mod__title">Awaiting approval</p>
            {moderation.map((item, index) => (
              <div key={item} className="sn-mod__row">
                <span className={`sn-mod__thumb sn-mod__thumb--${index + 1}`} />
                <span className="sn-mod__name">{item}</span>
                <span className="sn-mod__action">
                  <span className={`sn-mod__state sn-mod__state--${index + 1}`}>Approved</span>
                  <span className={`sn-mod__tick sn-mod__tick--${index + 1}`}>
                    <Icon name="check" />
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reel-scene sn-s5">
          <p className="sn-logo">
            Snappd
            <Icon name="camera-retro" className="sn-logo-camera" />
          </p>
          <svg className="sn-swoosh" viewBox="0 0 400 40">
            <path d="M8,28 C90,8 200,4 392,20" pathLength={1} />
          </svg>
          <p className="sn-url">snappd.app</p>
          <p className="sn-price">from £29 · ready in two minutes</p>
          <p className="sn-credit">Designed and built by Tausif Meah</p>
        </div>

        <span className="sn-wipe" />
        <span className="sn-fade" />
      </div>
    </ReelStage>
  );
}
