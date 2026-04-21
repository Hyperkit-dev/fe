"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** Pattern from Cult UI Logo Carousel — adapted for arbitrary React nodes (e.g. next/image). */
export type LogoCarouselItem = {
  id: string | number;
  name: string;
  content: React.ReactNode;
};

/** Round-robin split only — no padding, so each logo appears in at most one column (no duplicates). */
function distributeLogosDeterministic(
  allLogos: LogoCarouselItem[],
  columnCount: number
): LogoCarouselItem[][] {
  if (allLogos.length === 0) return [];
  const n = Math.min(Math.max(columnCount, 1), allLogos.length);
  const columns: LogoCarouselItem[][] = Array.from({ length: n }, () => []);
  allLogos.forEach((logo, index) => {
    columns[index % n].push(logo);
  });
  return columns.filter((col) => col.length > 0);
}

type LogoColumnProps = {
  logos: LogoCarouselItem[];
  index: number;
  currentTime: number;
};

const LogoColumn = React.memo(function LogoColumn({
  logos,
  index,
  currentTime,
}: LogoColumnProps) {
  const cycleInterval = 2000;
  const columnDelay = index * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const current = logos[currentIndex];

  return (
    <motion.div
      className="relative h-12 w-[8.25rem] overflow-hidden sm:h-14 sm:w-[9.5rem] md:h-16 md:w-[14rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${String(current.id)}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center px-1"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <div className="flex h-full w-full max-h-[90%] max-w-[92%] items-center justify-center [&_img]:max-h-full [&_img]:w-auto [&_img]:object-contain">
            {current.content}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

export type LogoCarouselProps = {
  items: LogoCarouselItem[];
  columnCount?: number;
  className?: string;
};

export function LogoCarousel({
  items,
  columnCount = 3,
  className,
}: LogoCarouselProps) {
  const logoSets = useMemo(
    () => distributeLogosDeterministic(items, columnCount),
    [items, columnCount]
  );

  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((t) => t + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  if (items.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className ?? ""}`}
      aria-label="Logo carousel"
    >
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}
