import { Cormorant_Garamond, Parisienne } from "next/font/google";
import { Slideshow } from "./Slideshow";
import { Countdown } from "./Countdown";
import { CeremonyReception } from "./CeremonyReception";
import { CeremonyItinerary } from "./CeremonyItinerary";
import { CeremonyClothing } from "./CeremonyClothing";
import { CeremonyCover } from "./CeremonyCover";
import { CeremonyConfirm } from "./CeremonyConfirm";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function InvitationContent() {
  return (
    <>
      <section className="mx-auto w-full px-6 pt-28 pb-4">
        <div className="text-center">
          <p className="font-body text-lg tracking-[0.5em] uppercase text-neutral-600">
            17 . 01 . 2026
          </p>
          <h1
            className={`${parisienne.className} text-[52px] text-neutral-900 leading-tight py-14`}
          >
            Victor &amp; Fiorella
          </h1>
        </div>
      </section>

      <section className="relative mt-20 bg-black">
        <div className="relative mx-auto w-full max-w-[420px] -translate-y-[80px] px-10">
          <div className="aspect-3/4 w-full overflow-hidden rounded-md border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <Slideshow
              images={[
                "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(2).jpeg",
                "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(1).jpeg",
                "https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.04.jpeg",
              ]}
            />
          </div>
        </div>
      </section>

      <Countdown target="2026-01-17T18:30:00-05:00" />

      <section className="py-40 px-10 max-w-lg mx-auto">
        <p
          className={`${cormorant.className} text-center text-lg text-neutral-800 mb-12`}
        >
          Por fin llegó el día de decir ‘sí’ oficialmente, y queremos celebrarlo
          con quienes hacen nuestra vida más bonita. Nuestra boda civil será en
          una fecha muy especial para nosotros, y nos encantaría que tú formes
          parte de este momento inolvidable.
        </p>
        <p
          className={`${cormorant.className} text-center text-lg text-neutral-800`}
        >
          Te esperamos para celebrar juntos el día
        </p>
      </section>

      <section className="sticky top-0 aspect-3/4 max-w-lg mx-auto">
        <img
          src="https://jpmayorga.sirv.com/Images/WhatsApp%20Image%202025-12-08%20at%2012.31.05%20(3).jpeg"
          alt="Mapa"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      <CeremonyReception />
      <CeremonyItinerary />
      <CeremonyClothing />
      <CeremonyConfirm />
      <CeremonyCover />
    </>
  );
}
