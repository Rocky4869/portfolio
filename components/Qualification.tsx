import Image from "next/image";
import { education, work } from "@/constants";

export default function Qualification() {
  return (
    <section id="qualification" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-8">
            Qualification
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            My education and work experiences
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {education.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 p-5 sm:p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white">
                      {s.name}
                    </h4>
                    <p className="text-sm text-gray-300">{s.subtitle}</p>
                    <p className="text-xs sm:text-sm text-purple-300 mt-1">
                      {s.period}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
            Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {work.map((w) => (
              <div
                key={w.company}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#0b0f2b]/60 to-[#1a103a]/40 p-4 sm:p-5 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-purple-500/20"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div
                    className={`relative rounded-xl overflow-hidden ${
                      w.company === "Hang Seng Bank"
                        ? "h-24 w-40 md:h-36 md:w-60"
                        : "h-24 w-32 md:h-36 md:w-48"
                    }`}
                  >
                    <Image
                      src={w.logo}
                      alt={w.company}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-white">
                      {w.role}
                    </p>
                    <p className="text-xs sm:text-sm text-purple-300 mt-0.5">
                      {w.period}
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-opacity group-hover:opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
