import type { ProjectTheme } from "@/content/types";

type DeviceFrameProps = {
  src: string;
  alt: string;
  theme: ProjectTheme;
  eager?: boolean;
};

export function DeviceFrame({ src, alt, theme, eager }: DeviceFrameProps) {
  return (
    <div className={`device device--${theme}`}>
      <div className="device__screen">
        <img
          src={src}
          alt={alt}
          width={430}
          height={932}
          loading={eager ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
}
