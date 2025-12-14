import { Montserrat, Parisienne } from "next/font/google";
import Link from "next/link";

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
    <section className="bg-white px-10 py-20 relative z-20 border-t border-neutral-200">
      <div className="mx-auto max-w-lg flex w-full flex-col items-center gap-4">
        <h3 className={`${parisienne.className} font-script text-3xl mb-16`}>
          Confirmación
        </h3>

        <div className="mb-12 flex flex-col gap-4">
          <Link
            href="https://wa.me/+5930994613772?text=Hola, confirmo mi asistencia."
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Confirmar con Victor
          </Link>

          <Link
            href="https://wa.me/+5930989828143?text=Hola, confirmo mi asistencia."
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-2 text-xs font-body uppercase tracking-[0.25em] bg-black text-white"
          >
            Confirmar con Fiorella
          </Link>
        </div>
        <p
          className={`${montserrat.className} text-sm text-neutral-700 leading-relaxed`}
        >
          ¡Esperamos verlos y celebrar juntos!
        </p>
      </div>
    </section>
  );
}
