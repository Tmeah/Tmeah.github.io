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

const habits = [
  { name: "Move", icon: "dumbbell", value: "0.6h", fillAt: 7.3 },
  { name: "Food", icon: "apple-whole", value: "3 of 3", fillAt: 7.75 },
  { name: "Sleep", icon: "moon", value: "8h", fillAt: 8.2 },
] satisfies ({ icon: IconName } & Record<string, unknown>)[];

const floaters = [
  { icon: "bolt", text: "+50 XP" },
  { icon: "trophy", text: "Level 4" },
  { icon: "fire", text: "30 day streak" },
] satisfies ({ icon: IconName } & Record<string, unknown>)[];

const cuts = [3.1, 6.6, 10.5, 13.1];

function growWipe(): Track {
  const frames: Frame[] = cuts.flatMap((cut) => [
    { at: cut - 0.42, transform: "translateY(101%)", ease: ease.inOut },
    { at: cut, transform: "translateY(0%)", ease: ease.inOut },
    { at: cut + 0.42, transform: "translateY(-101%)" },
    { at: cut + 0.42, transform: "translateY(101%)" },
  ]);
  return { target: ".gg-wipe", frames: [{ at: 0, transform: "translateY(101%)" }, ...frames] };
}


const tracks: Track[] = [
  loopFade(".gg-fade"),
  growWipe(),
  {
    target: ".gg-glow",
    frames: [
      { at: 0, transform: "translate(0em, 0em) scale(1)", ease: ease.inOut },
      { at: 7.5, transform: "translate(-30em, 6em) scale(1.3)", ease: ease.inOut },
      { at: 15, transform: "translate(0em, 0em) scale(1)" },
    ],
  },

  // Scene 1: title
  draw(".gg-s1 .gg-mark__ring", 0.2, 1.1),
  inOut(".gg-s1 .gg-mark__g", 0.5, 2.7, pop.hidden, pop.shown, { inEase: ease.back }),
  inOut(".gg-s1 .gg-mark", 0.2, 2.7, { opacity: 1 }, { opacity: 1 }, { exit: { opacity: 0 } }),
  ...stagger(2, (index) =>
    inOut(`.gg-s1 .reel-line:nth-child(${index + 1}) > span`, 0.8 + index * 0.22, 2.7, maskIn.hidden, maskIn.shown, { inFor: 0.9, ...maskOut }),
  ),

  // Scene 2: height estimate
  inOut(".gg-s2 .gg-kicker", 3.2, 6.25, rise(1.5).hidden, rise(1.5).shown),
  ...stagger(2, (index) =>
    inOut(`.gg-s2 .reel-line:nth-child(${index + 1}) > span`, 3.35 + index * 0.15, 6.25, maskIn.hidden, maskIn.shown, maskOut),
  ),
  inOut(".gg-s2 .gg-note", 3.9, 6.25, rise(1.5).hidden, rise(1.5).shown),
  inOut(".gg-ruler", 3.2, 6.25, { opacity: 0, transform: "translateX(4em)" }, { opacity: 1, transform: "translateX(0em)" }),
  inOut(".gg-bar", 3.4, 6.25, { clipPath: "inset(100% 0% 0% 0% round 3em)" }, { clipPath: "inset(0% 0% 0% 0% round 3em)" }, {
    inFor: 1.9,
    inEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    exit: { clipPath: "inset(0% 0% 100% 0% round 3em)" },
  }),
  {
    target: ".gg-marker",
    frames: [
      { at: 3.4, opacity: 0, transform: "translateY(38em)", ease: ease.out },
      { at: 3.6, opacity: 1, transform: "translateY(34em)", ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { at: 5.3, opacity: 1, transform: "translateY(0em)" },
      { at: 6.25, opacity: 1, transform: "translateY(0em)", ease: ease.in },
      { at: 6.6, opacity: 0, transform: "translateY(-4em)" },
    ],
  },
  {
    target: ".gg-marker__num",
    frames: [
      { at: 3.6, "--gg-n": 120, ease: "cubic-bezier(0.22, 1, 0.36, 1)" },
      { at: 5.3, "--gg-n": 178 },
    ],
  },
  inOut(".gg-target", 5.1, 6.25, { opacity: 0, transform: "scaleX(0)" }, { opacity: 1, transform: "scaleX(1)" }, { inFor: 0.6 }),

  // Scene 3: the daily loop
  ...stagger(habits.length, (index) =>
    inOut(`.gg-words span:nth-child(${index + 1})`, 6.8 + index * 0.2, 10.15, rise(1.2).hidden, rise(1.2).shown, {
      inEase: ease.back,
      inFor: 0.6,
    }),
  ),
  ...habits.flatMap((habit, index) => [
    inOut(`.gg-habit--${index + 1}`, 6.85 + index * 0.15, 10.15, { opacity: 0, transform: "scale(0.6)" }, { opacity: 1, transform: "scale(1)" }, {
      inEase: ease.back,
      exit: { opacity: 0, transform: "scale(0.8) translateY(4em)" },
    }),
    draw(`.gg-habit--${index + 1} .gg-habit__progress`, habit.fillAt, 0.85),
    enter(`.gg-habit--${index + 1} .gg-habit__check`, habit.fillAt + 0.8, pop.hidden, pop.shown, { inEase: ease.back, inFor: 0.45 }),
  ]),
  inOut(".gg-streak", 8.85, 10.15, rise(2).hidden, rise(2).shown, { inEase: ease.back }),
  {
    target: ".gg-streak__num",
    frames: [
      { at: 9.0, "--gg-s": 1, ease: "cubic-bezier(0.33, 1, 0.68, 1)" },
      { at: 9.9, "--gg-s": 30 },
    ],
  },

  // Scene 4: the app
  inOut(".gg-s4 .gg-kicker", 10.65, 12.85, rise(1.5).hidden, rise(1.5).shown),
  ...stagger(3, (index) =>
    inOut(`.gg-s4 .reel-line:nth-child(${index + 1}) > span`, 10.75 + index * 0.13, 12.85, maskIn.hidden, maskIn.shown, maskOut),
  ),
  {
    target: ".gg-phone",
    frames: [
      { at: 10.55, opacity: 0, transform: "translateY(40em) rotate(-10deg)", ease: ease.out },
      { at: 11.4, opacity: 1, transform: "translateY(0em) rotate(3deg)", ease: ease.inOut },
      { at: 12.8, opacity: 1, transform: "translateY(-1.5em) rotate(-1deg)", ease: ease.in },
      { at: 13.15, opacity: 0, transform: "translateY(-8em) rotate(-4deg)" },
    ],
  },
  ...stagger(floaters.length, (index) => {
    const start = 11.25 + index * 0.24;
    return {
      target: `.gg-float--${index + 1}`,
      frames: [
        { at: start, opacity: 0, transform: "translateY(2em) scale(0.5)", ease: ease.back },
        { at: start + 0.6, opacity: 1, transform: "translateY(0em) scale(1)", ease: ease.inOut },
        { at: 12.6, opacity: 1, transform: "translateY(-0.8em) scale(1)", ease: ease.in },
        { at: 12.95, opacity: 0, transform: "translateY(-2.5em) scale(0.8)" },
      ],
    };
  }),

  // Scene 5: lockup
  draw(".gg-s5 .gg-mark__ring", 13.2, 0.9),
  enter(".gg-s5 .gg-mark", 13.15, { opacity: 0 }, { opacity: 1 }, { inFor: 0.3 }),
  enter(".gg-s5 .gg-mark__g", 13.35, pop.hidden, pop.shown, { inEase: ease.back }),
  enter(".gg-end-word", 13.5, { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)" }, { inFor: 0.7 }),
  enter(".gg-url", 13.8, rise(1.5).hidden, rise(1.5).shown),
  enter(".gg-store", 13.95, rise(1.5).hidden, rise(1.5).shown),
  enter(".gg-credit", 14.1, rise(1.5).hidden, rise(1.5).shown),
];

function Mark() {
  return (
    <span className="gg-mark">
      <svg viewBox="0 0 100 100">
        <circle className="gg-mark__track" cx="50" cy="50" r="44" />
        <circle className="gg-mark__ring" cx="50" cy="50" r="44" pathLength={1} />
      </svg>
      <span className="gg-mark__g">G</span>
    </span>
  );
}

export function GoGrowReel() {
  return (
    <ReelStage slug="gogrow" name="GoGrow" tracks={tracks} posterAt={14.3}>
      <div className="gg">
        <span className="gg-glow" />

        <div className="reel-scene gg-s1">
          <Mark />
          <p className="gg-title">
            <span className="reel-line">
              <span>height habits</span>
            </span>
            <span className="reel-line">
              <span className="gg-serif">for growing kids</span>
            </span>
          </p>
        </div>

        <div className="reel-scene gg-s2">
          <div className="gg-copy">
            <p className="gg-kicker">01 / Estimate</p>
            <p className="gg-big">
              <span className="reel-line">
                <span>A personalised</span>
              </span>
              <span className="reel-line">
                <span className="gg-teal">height estimate.</span>
              </span>
            </p>
            <p className="gg-note">Educational, not medical advice.</p>
          </div>
          <span className="gg-ruler" />
          <span className="gg-bar" />
          <span className="gg-target" />
          <div className="gg-marker">
            <span className="gg-marker__line" />
            <span className="gg-marker__bubble">
              <span className="gg-marker__num" /> cm
            </span>
          </div>
        </div>

        <div className="reel-scene gg-s3">
          <p className="gg-words">
            {habits.map((habit) => (
              <span key={habit.name} className={`gg-word--${habit.name.toLowerCase()}`}>
                {habit.name}.
              </span>
            ))}
          </p>
          <div className="gg-habits">
            {habits.map((habit, index) => (
              <div key={habit.name} className={`gg-habit gg-habit--${index + 1}`}>
                <span className="gg-habit__dial">
                  <svg viewBox="0 0 100 100">
                    <circle className="gg-habit__track" cx="50" cy="50" r="42" />
                    <circle className="gg-habit__progress" cx="50" cy="50" r="42" pathLength={1} />
                  </svg>
                  <Icon name={habit.icon} />
                  <span className="gg-habit__check">
                    <Icon name="check" />
                  </span>
                </span>
                <span className="gg-habit__name">{habit.name}</span>
                <span className="gg-habit__value">{habit.value}</span>
              </div>
            ))}
          </div>
          <p className="gg-streak">
            <Icon name="fire" />
            <span className="gg-streak__num" /> day streak
          </p>
        </div>

        <div className="reel-scene gg-s4">
          <div className="gg-copy gg-copy--app">
            <p className="gg-kicker">02 / Keep going</p>
            <p className="gg-big">
              <span className="reel-line">
                <span>One tap to log.</span>
              </span>
              <span className="reel-line">
                <span className="gg-teal">Streaks do</span>
              </span>
              <span className="reel-line">
                <span className="gg-teal">the rest.</span>
              </span>
            </p>
          </div>
          <div className="gg-phone">
            <img src="/projects/gogrow-phone.webp" alt="" width={436} height={951} />
          </div>
          {floaters.map((floater, index) => (
            <p key={floater.text} className={`gg-float gg-float--${index + 1}`}>
              <Icon name={floater.icon} /> {floater.text}
            </p>
          ))}
        </div>

        <div className="reel-scene gg-s5">
          <div className="gg-lockup">
            <Mark />
            <span className="gg-end-word">GoGrow</span>
          </div>
          <p className="gg-url">getgogrow.app</p>
          <p className="gg-store">
            <Icon name="apple" /> Available on iPhone
          </p>
          <p className="gg-credit">Built by Tausif Meah</p>
        </div>

        <span className="gg-wipe" />
        <span className="gg-fade" />
      </div>
    </ReelStage>
  );
}
