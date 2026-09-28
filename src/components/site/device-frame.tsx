import type { ProjectTheme } from "@/content/types";

type DeviceFrameProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  theme: ProjectTheme;
  eager?: boolean;
};

export function DeviceFrame({ src, width, height, alt, theme, eager }: DeviceFrameProps) {
  return (
    <div className={`device device--${theme}`}>
      <div className="device__screen">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
