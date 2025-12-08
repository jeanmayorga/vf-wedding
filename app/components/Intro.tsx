"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const envelopeImg =
  "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05.jpeg";
const photoImg =
  "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(1).jpeg";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
  };

  useEffect(() => {
    if (!isOpened) return;
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [isOpened, onComplete]);

  return (
    <motion.section
      className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-between bg-[#f5f4f2] px-4 py-12"
      exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      <div className="mt-12 text-center">
        <p className="font-serif text-lg italic text-neutral-600 mb-2">
          Estás invitado a la boda de
        </p>
        <h1 className="font-script text-5xl md:text-6xl text-neutral-900 tracking-wide">
          Victor & Fiorella
        </h1>
      </div>

      <button
        type="button"
        onClick={handleOpen}
        className="group relative mt-8 w-full max-w-md outline-none perspective-1000"
      >
        <div className="relative mx-auto w-full transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl bg-white p-2">
            <div className="relative h-full w-full overflow-hidden border border-neutral-100">
              <img
                src={envelopeImg}
                alt="Sobre de invitación"
                className={`h-full w-full object-cover transition-all duration-1000 ${
                  isOpened ? "brightness-110 blur-sm scale-110" : ""
                }`}
              />
            </div>

            {!isOpened && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-500 group-hover:bg-black/10">
                <span className="rounded-full bg-white/90 px-6 py-2 font-sans text-xs tracking-[0.2em] uppercase text-neutral-800 shadow-lg backdrop-blur-sm">
                  Abrir Invitación
                </span>
              </div>
            )}

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-[1500ms] ease-out ${
                isOpened
                  ? "translate-y-[-10%] scale-90 opacity-100"
                  : "translate-y-[10%] scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative w-[85%] bg-white p-6 shadow-xl text-center">
                <div className="border border-neutral-200 p-4">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
                    17 . 01 . 2026
                  </p>
                  <p className="font-script text-3xl text-neutral-800 mb-2">
                    Victor & Fiorella
                  </p>
                  <div className="my-4 h-px w-12 bg-neutral-200 mx-auto"></div>
                  <p className="font-serif text-sm italic text-neutral-600">
                    ¡Nos Casamos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>

      <div className="mb-8 text-center">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-neutral-400">
          Terra Nostra · 2026
        </p>
      </div>
    </motion.section>
  );
}
