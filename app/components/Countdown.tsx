"use client";

import { useEffect, useMemo, useState } from "react";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface CountdownProps {
  target: string | Date;
  className?: string;
}

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const pad = (value: number) => value.toString().padStart(2, "0");

const calculateRemaining = (targetDate: Date): TimeParts => {
  const diff = targetDate.getTime() - new Date().getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export function Countdown({ target, className = "" }: CountdownProps) {
  const targetDate = useMemo(
    () => (target instanceof Date ? target : new Date(target)),
    [target]
  );

  const [time, setTime] = useState<TimeParts>(() =>
    calculateRemaining(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const segments = [
    { label: "Días", value: pad(time.days) },
    { label: "Horas", value: pad(time.hours) },
    { label: "Min", value: pad(time.minutes) },
    { label: "Seg", value: pad(time.seconds) },
  ];

  return (
    <section className={`bg-black py-16 text-white ${className}`}>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 px-4 text-center">
        <h2 className="font-display text-sm uppercase tracking-[0.4em] text-neutral-200">
          SAVE{" "}
          <span className={`${parisienne.className} text-3xl lowercase`}>
            the
          </span>{" "}
          DATE
        </h2>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 md:gap-6">
          {segments.map((segment) => (
            <div key={segment.label} className="min-w-[70px] text-center">
              <p className="font-display text-4xl md:text-5xl">
                {segment.value}
              </p>
              <p className="mt-2 text-xs tracking-[0.35em] text-neutral-400">
                {segment.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
