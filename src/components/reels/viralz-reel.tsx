import { ReelStage } from "@/components/reels/reel-stage";
import {
  draw,
  ease,
  enter,
  flashes,
  inOut,
  loopFade,
  maskIn,
  maskOut,
  pop,
  rise,
  stagger,
  type Track,
} from "@/components/reels/timeline";

const word = "Viralz".split("");

const chips = [
  { icon: "fas fa-user-plus", value: "+645", label: "followers" },
  { icon: "fas fa-eye", value: "259K", label: "avg views" },
  { icon: "fas fa-star", value: "54", label: "quality score" },
  { icon: "fas fa-heart", value: "4.98%", label: "engagement" },
];

const insight =
  "Your best videos hook viewers in the first two seconds. Lead with the payoff.".split(" ");

const slogan = ["Insight", "over", "numbers."];


const tracks: Track[] = [
  loopFade(".vz-fade"),
  flashes(".vz-flash", [3.1, 7.4, 11.1, 13.3]),
  {
    target: ".vz-glow--a",
    frames: [
      { at: 0, transform: "translate(0em, 0em) scale(1)", ease: ease.inOut },
      { at: 5, transform: "translate(-24em, 8em) scale(1.25)", ease: ease.inOut },
      { at: 10, transform: "translate(-6em, -6em) scale(0.9)", ease: ease.inOut },
      { at: 15, transform: "translate(0em, 0em) scale(1)" },
    ],
  },
  {
    target: ".vz-glow--b",
    frames: [
      { at: 0, transform: "translate(0em, 0em) scale(1)", ease: ease.inOut },
      { at: 7, transform: "translate(22em, -10em) scale(1.3)", ease: ease.inOut },
      { at: 15, transform: "translate(0em, 0em) scale(1)" },
    ],
  },

  // Scene 1: logo burst
  ...[0.15, 0.4].map((start, index) => ({
    target: `.vz-burst--${index + 1}`,
    frames: [
      { at: start, opacity: 1, transform: "scale(0)", ease: ease.out },
      { at: start + 1.3, opacity: 0, transform: "scale(3.4)" },
    ],
  })),
  inOut(
    ".vz-s1 .vz-icon",
    0.3,
    2.7,
    { opacity: 0, transform: "scale(0) rotate(-120deg)" },
    { opacity: 1, transform: "scale(1) rotate(0deg)" },
    { inFor: 0.9, inEase: ease.back, exit: { opacity: 0, transform: "scale(0.6) rotate(20deg)" } },
  ),
  ...stagger(word.length, (index) =>
    inOut(
      `.vz-s1 .vz-word span:nth-child(${index + 1})`,
      0.6 + index * 0.06,
      2.65 + index * 0.025,
      maskIn.hidden,
      maskIn.shown,
      { inFor: 0.75, ...maskOut },
    ),
  ),
  inOut(".vz-tag", 1.35, 2.7, rise(2).hidden, rise(2).shown),

  // Scene 2: every metric, one place
  inOut(".vz-s2 .vz-kicker", 3.2, 7.0, rise(1.5).hidden, rise(1.5).shown),
  ...stagger(2, (index) =>
    inOut(`.vz-s2 .reel-line:nth-child(${index + 1}) > span`, 3.35 + index * 0.14, 7.0 + index * 0.05, maskIn.hidden, maskIn.shown, maskOut),
  ),
  {
    target: ".vz-phone",
    frames: [
      { at: 3.05, opacity: 0, transform: "translate(0em, 40em) rotate(14deg)", ease: ease.out },
      { at: 4.0, opacity: 1, transform: "translate(0em, 0em) rotate(-3deg)", ease: ease.inOut },
      { at: 7.0, opacity: 1, transform: "translate(0em, -1.5em) rotate(2deg)", ease: ease.in },
      { at: 7.45, opacity: 0, transform: "translate(-10em, -4em) rotate(10deg)" },
    ],
  },
  ...stagger(chips.length, (index) => {
    const start = 3.9 + index * 0.26;
    return {
      target: `.vz-chip--${index + 1}`,
      frames: [
        { at: start, opacity: 0, transform: "translateY(2em) scale(0.6)", ease: ease.back },
        { at: start + 0.65, opacity: 1, transform: "translateY(0em) scale(1)", ease: ease.inOut },
        { at: 5.8 + index * 0.1, opacity: 1, transform: "translateY(-0.9em) scale(1)", ease: ease.inOut },
        { at: 7.0, opacity: 1, transform: "translateY(0em) scale(1)", ease: ease.in },
        { at: 7.35, opacity: 0, transform: "translateY(-2em) scale(0.8)" },
      ],
    };
  }),

  // Scene 3: understand what drove it
  inOut(".vz-s3 .vz-kicker", 7.5, 10.8, rise(1.5).hidden, rise(1.5).shown),
  inOut(".vz-count", 7.55, 10.8, rise(3).hidden, rise(3).shown),
  {
    target: ".vz-count__num",
    frames: [
      { at: 7.6, "--vz-n": 0, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { at: 9.4, "--vz-n": 259 },
    ],
  },
  inOut(".vz-count__label", 7.85, 10.8, rise(1.5).hidden, rise(1.5).shown),
  inOut(".vz-chart", 7.6, 10.8, rise(2).hidden, rise(2).shown),
  draw(".vz-chart__line", 7.8, 1.7),
  { target: ".vz-chart__area", frames: [{ at: 8.9, opacity: 0, ease: ease.out }, { at: 9.9, opacity: 1 }] },
  inOut(".vz-chart__dot", 9.35, 10.8, pop.hidden, pop.shown, { inEase: ease.back, inFor: 0.5 }),
  inOut(".vz-insight", 9.15, 10.8, rise(3).hidden, rise(3).shown),
  ...stagger(insight.length, (index) =>
    enter(`.vz-insight__text span:nth-child(${index + 1})`, 9.45 + index * 0.05, { opacity: 0.12 }, { opacity: 1 }, { inFor: 0.3 }),
  ),

  // Scene 4: the product
  ...stagger(slogan.length, (index) =>
    inOut(
      `.vz-words span:nth-child(${index + 1})`,
      11.25 + index * 0.17,
      12.95,
      { opacity: 0, transform: "translateY(0.6em) rotate(6deg)" },
      { opacity: 1, transform: "translateY(0em) rotate(0deg)" },
      { inEase: ease.back, inFor: 0.6 },
    ),
  ),
  {
    target: ".vz-desk",
    frames: [
      { at: 11.1, opacity: 0, transform: "perspective(120em) rotateX(40deg) rotateY(-18deg) translateY(22em) scale(0.8)", ease: ease.out },
      { at: 12.1, opacity: 1, transform: "perspective(120em) rotateX(14deg) rotateY(-7deg) translateY(0em) scale(1)" },
      { at: 13.0, opacity: 1, transform: "perspective(120em) rotateX(9deg) rotateY(-3deg) translateY(-1em) scale(1.02)", ease: ease.in },
      { at: 13.35, opacity: 0, transform: "perspective(120em) rotateX(4deg) rotateY(0deg) translateY(-6em) scale(1.1)" },
    ],
  },

  // Scene 5: lockup
  enter(".vz-s5 .vz-icon", 13.35, { opacity: 0, transform: "scale(0) rotate(-90deg)" }, { opacity: 1, transform: "scale(1) rotate(0deg)" }, { inEase: ease.back }),
  enter(".vz-end-word", 13.5, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { inFor: 0.7 }),
  enter(".vz-url", 13.8, rise(1.5).hidden, rise(1.5).shown),
  enter(".vz-credit", 14.0, rise(1.5).hidden, rise(1.5).shown),
];

export function ViralzReel() {
  return (
    <ReelStage slug="viralz" name="Viralz" tracks={tracks} posterAt={14.2}>
      <div className="vz">
        <span className="vz-glow vz-glow--a" />
        <span className="vz-glow vz-glow--b" />
        <span className="vz-dots" />

        <div className="reel-scene vz-s1">
          <span className="vz-burst vz-burst--1" />
          <span className="vz-burst vz-burst--2" />
          <div className="vz-lockup">
            <span className="vz-icon">
              <i className="fas fa-rocket" />
            </span>
            <span className="vz-word">
              {word.map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </span>
          </div>
          <p className="vz-tag">Know why it went viral.</p>
        </div>

        <div className="reel-scene vz-s2">
          <div className="vz-copy">
            <p className="vz-kicker">01 / Track</p>
            <p className="vz-big">
              <span className="reel-line">
                <span>Every metric.</span>
              </span>
              <span className="reel-line">
                <span className="vz-pink">One place.</span>
              </span>
            </p>
          </div>
          <div className="vz-phone">
            <img src="/projects/viralz-phone.webp" alt="" width={384} height={820} />
          </div>
          {chips.map((chip, index) => (
            <div key={chip.label} className={`vz-chip vz-chip--${index + 1}`}>
              <i className={chip.icon} />
              <span>
                <b>{chip.value}</b> {chip.label}
              </span>
            </div>
          ))}
        </div>

        <div className="reel-scene vz-s3">
          <div className="vz-stat">
            <p className="vz-kicker">02 / Understand</p>
            <p className="vz-count">
              <span className="vz-count__num" />
            </p>
            <p className="vz-count__label">average views per video</p>
          </div>
          <svg className="vz-chart" viewBox="0 0 600 300">
            <defs>
              <linearGradient id="vz-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff2d55" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ff2d55" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vz-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#b44cff" />
                <stop offset="100%" stopColor="#ff2d55" />
              </linearGradient>
            </defs>
            {[60, 130, 200, 270].map((y) => (
              <line key={y} x1="0" x2="600" y1={y} y2={y} className="vz-chart__grid" />
            ))}
            <path
              className="vz-chart__area"
              d="M0,260 C60,250 90,210 150,220 S250,160 300,170 S400,100 450,110 S560,40 600,28 L600,300 L0,300 Z"
              fill="url(#vz-area)"
            />
            <path
              className="vz-chart__line"
              d="M0,260 C60,250 90,210 150,220 S250,160 300,170 S400,100 450,110 S560,40 600,28"
              pathLength={1}
              stroke="url(#vz-stroke)"
            />
            <circle className="vz-chart__dot" cx="592" cy="30" r="11" />
          </svg>
          <div className="vz-insight">
            <p className="vz-insight__head">
              <i className="fas fa-wand-magic-sparkles" /> AI insight
            </p>
            <p className="vz-insight__text">
              {insight.map((item, index) => (
                <span key={index}>{item} </span>
              ))}
            </p>
          </div>
        </div>

        <div className="reel-scene vz-s4">
          <p className="vz-words">
            {slogan.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <div className="vz-desk">
            <div className="vz-desk__bar">
              <i />
              <i />
              <i />
            </div>
            <img src="/projects/viralz.webp" alt="" width={1440} height={900} />
          </div>
        </div>

        <div className="reel-scene vz-s5">
          <div className="vz-lockup vz-lockup--end">
            <span className="vz-icon">
              <i className="fas fa-rocket" />
            </span>
            <span className="vz-end-word">Viralz</span>
          </div>
          <p className="vz-url">viralzapp.com</p>
          <p className="vz-credit">Designed and built by Tausif Meah</p>
        </div>

        <span className="vz-flash" />
        <span className="vz-fade" />
      </div>
    </ReelStage>
  );
}
