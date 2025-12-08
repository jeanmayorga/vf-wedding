import { useRef, useState } from "react";

const SONG_URL =
  "https://framerusercontent.com/assets/rsva1fCXOgC0NiImrVzTfDT78EQ.mp3";

export function PlayMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SONG_URL);
    }

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="absolute top-4 left-4">
      <button onClick={togglePlay} className="flex items-center gap-3">
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </section>
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
