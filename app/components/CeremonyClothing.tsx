import { Montserrat, Parisienne } from "next/font/google";
import { IconClothing } from "./icon-clothing";

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

export function CeremonyClothing() {
  return (
    <section className="bg-white px-10 py-30 relative z-30">
      <div className="mx-auto max-w-lg flex w-full flex-col items-center">
        <div className="h-16 w-16 mb-4">
          <IconClothing />
        </div>
        <h3 className={`${parisienne.className} font-script text-3xl mb-16`}>
          Vestimenta
        </h3>
        <h4 className={`${montserrat.className} text-lg text-center mb-4`}>
          Semi Formal
        </h4>
        <p className={`${montserrat.className} text-sm text-center mb-4`}>
          Evita utilizar gorras, camisetas de equipos de futbol o jeans rotos.
        </p>
      </div>
    </section>
  );
}
