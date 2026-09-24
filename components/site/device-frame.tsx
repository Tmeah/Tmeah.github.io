import Image from "next/image";
import type { ProjectTheme } from "@/lib/content/types";

type DeviceFrameProps = {
  src: string;
  alt: string;
  theme: ProjectTheme;
  sizes: string;
  priority?: boolean;
};

export function DeviceFrame({ src, alt, theme, sizes, priority }: DeviceFrameProps) {
  return (
    <div className={`device device--${theme}`}>
      <div className="device__screen">
        <Image src={src} alt={alt} width={430} height={932} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
