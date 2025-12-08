"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Parisienne } from "next/font/google";
import { InvitationContent } from "./components/InvitationContent";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const envelopeImg =
  "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05.jpeg";

const SONG_URL =
  "https://framerusercontent.com/assets/rsva1fCXOgC0NiImrVzTfDT78EQ.mp3";

export default function HomePage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const ensureAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SONG_URL);
    }
    return audioRef.current;
  };

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);

    const audio = ensureAudio();
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // En algunos navegadores el autoplay puede fallar;
        // el usuario siempre podrá usar el botón de play.
      });
  };

  const togglePlay = () => {
    const audio = ensureAudio();

    if (!isPlaying) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#f3f2ef] selection:bg-neutral-900 selection:text-white">
      {isOpened && (
        <section className="absolute top-4 left-4 z-40">
          <button onClick={togglePlay} className="flex items-center gap-3">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </section>
      )}

      {!isOpened && (
        <motion.section className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center gap-10 bg-[#f5f4f2] px-4 py-12">
          <div className="text-center">
            <p className="font-display text-lg italic text-neutral-600 mb-2">
              Estás invitado a la boda de
            </p>
            <h1
              className={`${parisienne.className} text-5xl md:text-6xl text-neutral-900 leading-tight tracking-wide`}
            >
              Victor & Fiorella
            </h1>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            className="group relative mt-8 w-full max-w-md outline-none perspective-1000"
          >
            <div className="relative mx-auto w-full transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm shadow-2xl bg-white p-2">
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
                    <span className="rounded-full bg-white/90 px-6 py-2 font-body text-xs tracking-[0.2em] uppercase text-neutral-800 shadow-lg backdrop-blur-sm">
                      Click para abrir
                    </span>
                  </div>
                )}

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ease-out ${
                    isOpened
                      ? "translate-y-[-10%] scale-90 opacity-100"
                      : "translate-y-[10%] scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative w-[85%] bg-white p-6 shadow-xl text-center">
                    <div className="border border-neutral-200 p-4">
                      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
                        17 . 01 . 2026
                      </p>
                      <p className="font-script text-3xl text-neutral-800 mb-2">
                        Victor & Fiorella
                      </p>
                      <div className="my-4 h-px w-12 bg-neutral-200 mx-auto"></div>
                      <p className="font-display text-sm italic text-neutral-600">
                        ¡Nos Casamos!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </motion.section>
      )}

      <InvitationContent />
    </main>
  );
}

function PlayIcon() {
  return (
    <svg
      width={22}
      aria-label="play audio"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="cursor-pointer"
    >
      <path
        d="M 5.379 1.292 C 4.968 1.033 4.449 1.017 4.023 1.251 C 3.598 1.486 3.334 1.933 3.333 2.419 L 3.333 13.581 C 3.334 14.067 3.598 14.514 4.023 14.749 C 4.449 14.983 4.968 14.967 5.379 14.708 L 14.215 9.127 C 14.602 8.883 14.836 8.457 14.836 8 C 14.836 7.543 14.602 7.117 14.215 6.873 Z"
        fill="#000"
      ></path>
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width={22}
      aria-label="pause audio"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="cursor-pointer"
    >
      <path
        d="M 3 3 C 3 2.448 3.448 2 4 2 L 6 2 C 6.552 2 7 2.448 7 3 L 7 13 C 7 13.552 6.552 14 6 14 L 4 14 C 3.448 14 3 13.552 3 13 Z"
        fill="#000"
      ></path>
      <path
        d="M 9 3 C 9 2.448 9.448 2 10 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 13 C 13 13.552 12.552 14 12 14 L 10 14 C 9.448 14 9 13.552 9 13 Z"
        fill="#000"
      ></path>
    </svg>
  );
}
