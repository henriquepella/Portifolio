import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  size?: number;
  className?: string;
}

/**
 * Server component: renders /avatar.jpg when the file exists in public/,
 * otherwise falls back to a gradient "HP" monogram. Dropping the photo in
 * later requires no code change.
 */
export function ProfileAvatar({ size = 160, className }: ProfileAvatarProps) {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "avatar.jpg"),
  );

  return (
    <div
      className={cn(
        "relative rounded-full p-[3px]",
        "bg-gradient-to-br from-primary via-primary-hover to-primary/40",
        "glow-primary-sm",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {hasPhoto ? (
        <Image
          src="/avatar.jpg"
          alt={siteConfig.fullName}
          width={size}
          height={size}
          priority
          className="size-full rounded-full object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center rounded-full bg-card">
          <span
            className="text-gradient-purple font-semibold tracking-tight select-none"
            style={{ fontSize: size * 0.34 }}
            aria-label={siteConfig.fullName}
          >
            {siteConfig.initials}
          </span>
        </div>
      )}
    </div>
  );
}
