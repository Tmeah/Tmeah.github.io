import { faApple, faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  type IconDefinition,
  faAdjust,
  faAppleWhole,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowUpRightFromSquare,
  faBolt,
  faCakeCandles,
  faCamera,
  faCameraRetro,
  faCheck,
  faDumbbell,
  faEye,
  faFileLines,
  faFilePdf,
  faFire,
  faGlobe,
  faHeart,
  faMoon,
  faMusic,
  faRocket,
  faStar,
  faSun,
  faTimes,
  faTrophy,
  faUserGroup,
  faUserPlus,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  adjust: faAdjust,
  apple: faApple,
  "apple-whole": faAppleWhole,
  "arrow-down": faArrowDown,
  "arrow-left": faArrowLeft,
  "arrow-right": faArrowRight,
  "arrow-up": faArrowUp,
  "arrow-up-right-from-square": faArrowUpRightFromSquare,
  bolt: faBolt,
  "cake-candles": faCakeCandles,
  camera: faCamera,
  "camera-retro": faCameraRetro,
  check: faCheck,
  dumbbell: faDumbbell,
  envelope: faEnvelope,
  eye: faEye,
  "file-lines": faFileLines,
  "file-pdf": faFilePdf,
  fire: faFire,
  github: faGithub,
  globe: faGlobe,
  heart: faHeart,
  linkedin: faLinkedin,
  "linkedin-in": faLinkedinIn,
  moon: faMoon,
  music: faMusic,
  rocket: faRocket,
  star: faStar,
  sun: faSun,
  times: faTimes,
  trophy: faTrophy,
  "user-group": faUserGroup,
  "user-plus": faUserPlus,
  "wand-magic-sparkles": faWandMagicSparkles,
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
};

// Inline SVG icons, wrapped in an <i> so they size and colour like text.
export function Icon({ name, className }: IconProps) {
  const [width, height, , , path] = icons[name].icon;
  return (
    <i className={className ? `icon ${className}` : "icon"} aria-hidden>
      <svg viewBox={`0 0 ${width} ${height}`} focusable="false">
        {(Array.isArray(path) ? path : [path]).map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </i>
  );
}
