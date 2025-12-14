"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { InvitationContent } from "./InvitationContent";
import Intro from "./Intro";

const SONG_URL =
  "https://framerusercontent.com/assets/rsva1fCXOgC0NiImrVzTfDT78EQ.mp3";

export function HomeClient() {
  const [hasOpened, setHasOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const searchParams = useSearchParams();

  const peopleParam = (searchParams.get("people") ?? "").trim();
  const people = peopleParam.length > 0 ? peopleParam : "Invitado";

  const ensureAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SONG_URL);
    }
    return audioRef.current;
  };

  const handleIntroOpen = () => {
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
      {hasOpened && (
        <section className="fixed top-4 left-4 z-40">
          <button
            onClick={togglePlay}
            className="flex items-center gap-3 bg-black rounded-full p-2 shadow-lg cursor-pointer"
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        </section>
      )}

      <AnimatePresence mode="wait">
        {!hasOpened && (
          <Intro
            key="intro"
            people={people}
            onOpen={handleIntroOpen}
            onComplete={() => setHasOpened(true)}
          />
        )}
      </AnimatePresence>

      {hasOpened && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <InvitationContent />
        </motion.div>
      )}
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
      className="cursor-pointer w-4 h-4"
    >
      <path
        d="M 5.379 1.292 C 4.968 1.033 4.449 1.017 4.023 1.251 C 3.598 1.486 3.334 1.933 3.333 2.419 L 3.333 13.581 C 3.334 14.067 3.598 14.514 4.023 14.749 C 4.449 14.983 4.968 14.967 5.379 14.708 L 14.215 9.127 C 14.602 8.883 14.836 8.457 14.836 8 C 14.836 7.543 14.602 7.117 14.215 6.873 Z"
        fill="#fff"
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
      className="cursor-pointer w-4 h-4"
    >
      <path
        d="M 3 3 C 3 2.448 3.448 2 4 2 L 6 2 C 6.552 2 7 2.448 7 3 L 7 13 C 7 13.552 6.552 14 6 14 L 4 14 C 3.448 14 3 13.552 3 13 Z"
        fill="#fff"
      ></path>
      <path
        d="M 9 3 C 9 2.448 9.448 2 10 2 L 12 2 C 12.552 2 13 2.448 13 3 L 13 13 C 13 13.552 12.552 14 12 14 L 10 14 C 9.448 14 9 13.552 9 13 Z"
        fill="#fff"
      ></path>
    </svg>
  );
}
