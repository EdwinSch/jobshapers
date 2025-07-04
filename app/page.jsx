import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <div className="w-full bg-jsOffWhite">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <Hero />
        </div>
      </div>

      {/* Breaker */}
      <div className="mx-auto py-14 md:py-18 max-w-7xl px-4 md:px-6 lg:px-8">
        <h3 className="mx-12 text-2xl md:text-3xl text-center font-bold text-jsMidnight leading-snug">
          "Bij JOBSHAPERS draait het niet om het vullen van functies, maar om
          het creëren van de juiste vorm waarin talent en organisatie elkaar
          versterken."
        </h3>
      </div>
    </main>
  );
}
