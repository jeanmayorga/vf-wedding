"use client";

import { Montserrat, Parisienne } from "next/font/google";
import { IconMonth } from "./icon-month";

const events = [
  { time: "06:30 PM", title: "Entrada de los novios" },
  { time: "07:00 PM", title: "Ceremonia Civil" },
  { time: "07:30 PM", title: "Brindis" },
  { time: "08:00 PM", title: "Hora de las fotos" },
  { time: "08:30 PM", title: "Cena" },
  { time: "09:00 PM", title: "Música en vivo" },
];

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export function CeremonyItinerary() {
  return (
    <section className="bg-black px-10 py-30 relative z-30">
      <div className="mx-auto max-w-lg flex w-full flex-col items-center text-white">
        <div className="h-16 w-16 mb-4">
          <IconMonth />
        </div>
        <h3
          className={`${parisienne.className} font-script text-3xl text-white mb-16`}
        >
          Itinerario
        </h3>
        <div className="space-y-4 mx-auto">
          {events.map((event) => (
            <div
              key={event.time}
              className="flex items-center gap-4 text-neutral-100"
            >
              <p className={`${montserrat.className} text-sm text-gray-300`}>
                {event.time}
              </p>

              <div className="w-[20px] h-[2px] bg-gray-300 rounded-full" />

              <p
                className={`${montserrat.className} flex-1 text-base text-gray-100`}
              >
                {event.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
