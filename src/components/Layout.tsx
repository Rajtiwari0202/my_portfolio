import React from "react";

export function Shell({
  children,
  className = "",
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`relative mx-auto w-full max-w-[760px] border-x border-dashed border-line ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  number,
  aside,
  id,
}: {
  title: string;
  number?: string;
  aside?: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="relative w-full border-y border-line bg-stripes">
      <Shell className="bg-bg">
        {/* Crosshair Corner Markers */}
        <span className="crosshair-anchor -top-[5px] -left-[5px] text-muted select-none">
          +
        </span>
        <span className="crosshair-anchor -top-[5px] -right-[5px] text-muted select-none">
          +
        </span>
        <span className="crosshair-anchor -bottom-[5px] -left-[5px] text-muted select-none">
          +
        </span>
        <span className="crosshair-anchor -bottom-[5px] -right-[5px] text-muted select-none">
          +
        </span>

        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            {number && (
              <span className="font-mono text-xs font-semibold tracking-wider text-muted">
                {number}
              </span>
            )}
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-text">
              {title}
            </h2>
          </div>
          {aside && <div className="text-xs text-muted font-mono">{aside}</div>}
        </div>
      </Shell>
    </div>
  );
}
