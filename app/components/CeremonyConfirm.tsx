import { Montserrat, Parisienne } from "next/font/google";
import Link from "next/link";
import { IconHeart } from "./icon-heart";

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

export function CeremonyConfirm() {
  return (
    <section className="px-10 py-30 relative z-20">
      <div className="mx-auto max-w-lg flex w-full flex-col items-center gap-4">
        <div className="h-8 w-8 mb-4">
          <IconHeart />
        </div>
        <h3 className={`${parisienne.className} font-script text-3xl mb-4`}>
          Confirmación
        </h3>
        <p
          className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed mb-8 px-8 text-center`}
        >
          Por favor, confirma tu asistencia antes del 10 de enero de 2026.
        </p>

        <p
          className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed mb-8 px-8 text-center`}
        >
          Confiamos en tu puntualidad.
        </p>

        <div className="mb-12 flex flex-col gap-4">
          <Link
            href="https://wa.me/+5930994613772?text=Hola Victor, confirmo mi asistencia la boda. Gracias por la invitación. 💪"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Confirmar con Victor
          </Link>

          <Link
            href="https://wa.me/+5930989828143?text=Hola Fio, confirmo mi asistencia la boda. Gracias por la invitación. ✨"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Confirmar con Fiorella
          </Link>
        </div>
        <p
          className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed px-8 text-center`}
        >
          ¡Esperamos verte y celebrar juntos nuestro gran día!
        </p>
      </div>
    </section>
  );
}
