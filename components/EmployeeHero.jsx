import LinkButton from "./LinkButton";
import Image from "next/image";
import desk from "@/assets/desk-with-laptop.png";

const EmployeeHero = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">
      <article>
        <h1 className="text-2xl sm:text-3xl font-semibold text-jsGreen">
          Op zoek naar jouw ideale baan?
        </h1>

        <p className="text-jsMidnight text-base my-4">
          Wil jij aan de slag in een functie die écht bij je past? Bij
          JOBSHAPERS helpen we jou om die perfecte match te vinden — ongeacht je
          achtergrond of ambitie. We luisteren goed naar jouw wensen en zorgen
          dat je terechtkomt bij een werkgever waar jij jezelf kunt zijn en
          verder kunt groeien.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <LinkButton
            href="/vacatures"
            label="bekijk nu de vacatures"
            variant="tertiary"
            className="w-fit"
          />
        </div>
      </article>

      <Image
        src={desk}
        alt="mutliple people in a birds view"
        className="imageStyle object-cover rounded-xl shadow-imgShadow grayscale"
        priority
      />
    </section>
  );
};
export default EmployeeHero;
