import { GoGrowReel } from "@/components/reels/gogrow-reel";
import { SnappdReel } from "@/components/reels/snappd-reel";
import { ViralzReel } from "@/components/reels/viralz-reel";
import type { ProjectTheme } from "@/content/types";

export function ProjectReel({ theme }: { theme: ProjectTheme }) {
  switch (theme) {
    case "viralz":
      return <ViralzReel />;
    case "snappd":
      return <SnappdReel />;
    case "gogrow":
      return <GoGrowReel />;
    default: {
      const exhaustive: never = theme;
      return exhaustive;
    }
  }
}
