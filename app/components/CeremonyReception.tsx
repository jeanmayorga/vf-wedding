"use client";

import Link from "next/link";
import { ChurchIcon } from "./church-icon";
import { CupsIcon } from "./cups-icon";
import { Montserrat, Parisienne } from "next/font/google";

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

export function CeremonyReception() {
  return (
    <section className="bg-[#f3f2ef] px-8 py-20 relative z-20">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-16">
        {/* CEREMONIA CIVIL */}
        <div className="text-center text-neutral-900">
          <div className="mx-auto flex h-16 w-16 items-center justify-center text-neutral-800">
            <ChurchIcon />
          </div>
          <h3
            className={`${parisienne.className} font-script text-3xl text-neutral-900 mb-4`}
          >
            Ceremonia Civil
          </h3>
          <p className={`${montserrat.className} text-sm text-[#545454] mb-4`}>
            06:30 PM
          </p>
          <p
            className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed mb-4`}
          >
            Urbanización TerraNostra
            <br />
            Etapa Sarria Mz 1661 - Villa 14
          </p>
          <Link
            href="https://maps.app.goo.gl/ro1zF4piiNcbNn8L6"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Ver mapa
          </Link>
        </div>

        {/* BRINDIS & CENA */}
        <div className="text-center text-neutral-900">
          <div className="mx-auto flex h-16 w-16 items-center justify-center text-neutral-800">
            <CupsIcon />
          </div>
          <h3
            className={`${parisienne.className} font-script text-3xl text-neutral-900 mb-4`}
          >
            Brindis &amp; Cena
          </h3>
          <p className={`${montserrat.className} text-sm text-[#545454] mb-4`}>
            07:30 PM
          </p>
          <p
            className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed mb-4`}
          >
            Urbanización TerraNostra
            <br />
            Etapa Sarria Mz 1661 - Villa 14
          </p>
          <Link
            href="https://maps.app.goo.gl/ro1zF4piiNcbNn8L6"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Ver mapa
          </Link>
        </div>
      </div>
    </section>
  );
}
