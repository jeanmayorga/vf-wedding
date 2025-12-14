"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Parisienne } from "next/font/google";

const photoImg =
  "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(1).jpeg";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

function ReservedCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "bg-[#fbfbfb] text-neutral-900",
        "border border-neutral-400",
        "rounded-xl",
        "shadow-[0_14px_25px_rgba(0,0,0,0.18)]",
        className,
      ].join(" ")}
    >
      <div className="p-2">
        <div className="border border-neutral-400 px-4 py-4 text-center rounded-xl">
          {title && (
            <p
              className={`${cormorant.className} text-[11px] tracking-[0.18em] uppercase text-neutral-700`}
            >
              {title}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
interface IntroProps {
  onComplete: () => void;
  onOpen?: () => void;
  people: string;
}

export default function Intro({ onComplete, onOpen, people }: IntroProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    onOpen?.();
  };

  return (
    <motion.section
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#f3f2ef] px-6"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="group relative outline-none">
        <h1
          className={`${parisienne.className} text-[52px] text-neutral-900 leading-tight py-14 px-10 text-center mb-20`}
        >
          Victor &amp; Fiorella
        </h1>
        <div
          className="relative mx-auto w-[min(460px,calc(100vw-48px))] aspect-46/36 bg-transparent"
          style={{ perspective: "900px" }}
        >
          {/* Back (rounded) */}
          <div className="absolute inset-0 rounded-[14px] shadow-[0_25px_55px_rgba(0,0,0,0.28)] bg-[#151517]" />
          <div className="absolute inset-0 rounded-[14px] opacity-70 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_55%)]" />
          <div className="absolute inset-0 rounded-[14px] opacity-35 bg-[radial-gradient(120%_90%_at_50%_120%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_55%)]" />

          {/* Content (only visible when opened) */}
          <div
            className={[
              "absolute inset-0 z-40",
              "transition-all duration-1100 ease-out",
              isOpened ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
            style={{
              transform: isOpened
                ? "translate3d(0,-36px,70px)"
                : "translate3d(0,30px,0)",
            }}
          >
            <div className="absolute left-14 top-0 rotate-[-10deg]">
              <ReservedCard title="Pase reservado para:" className="w-[190px]">
                <p
                  className={`${cormorant.className} mt-2 text-[18px] leading-snug text-neutral-900`}
                >
                  {people}
                </p>
              </ReservedCard>
            </div>

            <div className="absolute right-14 top-4 rotate-10">
              <div className="bg-white p-[6px] shadow-[0_18px_28px_rgba(0,0,0,0.22)]">
                <img
                  src={photoImg}
                  alt="Foto"
                  className="h-[140px] w-[105px] object-cover grayscale contrast-110"
                />
              </div>
            </div>

            <div className="absolute left-1/2 md:bottom-32 bottom-12 -translate-x-1/2 animate-bounce">
              <button
                type="button"
                onClick={onComplete}
                className="cursor-pointer"
                aria-label="Más detalles"
              >
                <ReservedCard className="w-[210px]">
                  <p
                    className={`${cormorant.className} text-[12px] text-neutral-700`}
                  >
                    Click aquí para:
                  </p>
                  <p
                    className={`${cormorant.className} text-[12px] tracking-[0.12em] uppercase text-neutral-900`}
                  >
                    MÁS DETALLES
                  </p>
                </ReservedCard>
              </button>
            </div>
          </div>

          {/* Flaps (clipped to rounded corners) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: "inset(0 round 14px)" }}
          >
            {/* Bottom flap */}
            <div
              className="absolute left-0 right-0 bottom-0 z-30 h-[65%] bg-[#101012]"
              style={{
                clipPath:
                  "polygon(0% 0%, 50% 65%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />

            {/* Left flap */}
            <div
              className="absolute left-0 bottom-0 z-30 h-[65%] w-1/2 bg-[#0d0d0f]"
              style={{ clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)" }}
            />

            {/* Right flap */}
            <div
              className="absolute right-0 bottom-0 z-30 h-[65%] w-1/2 bg-[#0d0d0f]"
              style={{ clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* Top flap */}
            <div
              className={[
                "absolute left-0 right-0 top-0 z-40 h-[60%] bg-[#1a1a1c]",
                "transition-transform duration-900 ease-in-out",
              ].join(" ")}
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 50% 78%)",
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                transform: isOpened ? "rotateX(175deg)" : "rotateX(0deg)",
              }}
            />
          </div>

          {/* Center text + seal (only closed) */}
          {!isOpened && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pointer-events-none select-none">
              <p
                className={`${cormorant.className} text-[18px] leading-tight text-white/90 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]`}
              >
                Click aquí
                <br />
                para abrir
              </p>
              <div className="mt-3 h-9 w-9 rounded-full bg-[#b18b2a] shadow-[inset_0_2px_0_rgba(255,255,255,0.22),0_10px_20px_rgba(0,0,0,0.35)]">
                <div className="h-full w-full rounded-full border border-black/20" />
              </div>
            </div>
          )}

          {/* Click overlay to open (only closed) */}
          {!isOpened && (
            <button
              type="button"
              onClick={handleOpen}
              aria-label="Abrir invitación"
              className="absolute inset-0 z-60 cursor-pointer rounded-[14px]"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
}
