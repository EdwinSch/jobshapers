import ActionButton from "@/components/ActionButton";

const JobCreationPage = () => {
  return (
    <div className="bg-jsOffWhite">
      <div className="mx-auto py-8 max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-2 text-center text-red-600 font-semibold">
          -- Protected Route --
        </p>

        {/* form */}
        <form className="flex-1 p-6 bg-white border border-slate-300 rounded-md">
          <h1 className="text-xl font-semibold text-jsMidnight">
            Maak een vacature
          </h1>
          <p className="mb-5 text-jsText text-sm">
            Vul de velden in om een vacature te plaatsen.
          </p>

          {/* vacature nummer */}
          <label htmlFor="job-number" className="text-jsMidnight text-sm">
            Vacature nummer
          </label>
          <input
            type="text"
            name=""
            id="job-number"
            placeholder="vac-001"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* vacature titel */}
          <label htmlFor="title" className="text-jsMidnight text-sm">
            Vacature titel
          </label>
          <input
            type="text"
            name=""
            id="title"
            placeholder="Procesoperator"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* vacature SUBtitel */}
          <label htmlFor="subtitle" className="text-jsMidnight text-sm">
            Subtitel/diensten
          </label>
          <select
            name=""
            id="subtitle"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          >
            <option value="dagdienst">Dagdienst</option>
            <option value="2-ploegen">2 ploegendienst</option>
            <option value="3-ploegen">3 ploegendienst</option>
            <option value="4-ploegen">4 ploegendienst</option>
            <option value="5-ploegen">5 ploegendienst</option>
          </select>

          {/* werkgever */}
          <label htmlFor="employer-name" className="text-jsMidnight text-sm">
            Bedrijfsnaam/werkgever (niet zichtbaar voor client)
          </label>
          <input
            type="text"
            name=""
            id="employer-name"
            placeholder="Pico Bello BV"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* standplaats */}
          <label htmlFor="city" className="text-jsMidnight text-sm">
            Standplaats
          </label>
          <input
            type="text"
            name=""
            id="city"
            placeholder="Rotterdam"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* introductie */}
          <label htmlFor="introduction" className="text-jsMidnight text-sm">
            Introductie tekst
          </label>
          <textarea
            name=""
            id="introduction"
            placeholder="Wil jij werken met geavanceerde installaties in een schone en veilige omgeving? Dan is dit jouw kans!"
            className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            style={{ resize: "none" }}
          />

          {/* functieomschrijving */}
          <label htmlFor="job-description" className="text-jsMidnight text-sm">
            Functieomschrijving
          </label>
          <textarea
            name=""
            id="job-description"
            placeholder="In deze rol bewaak je het productieproces en zorg je dat de installaties optimaal functioneren. Je stuurt bij waar nodig en voert kwaliteitscontroles uit."
            className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            style={{ resize: "none" }}
          />

          {/* functie-eisen KOPTEKST */}
          <label
            htmlFor="job-requirements-heading"
            className="text-jsMidnight text-sm"
          >
            Koptekst voor functie-eisen
          </label>
          <input
            type="text"
            name=""
            id="job-requirements-heading"
            placeholder="Wat jij meebrengt..."
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* functie-eisen */}
          <label htmlFor="job-requirements" className="text-jsMidnight text-sm">
            Functie-eisen (scheiden met een komma om opsomming te maken)
          </label>
          <input
            type="text"
            name=""
            id="job-requirements"
            placeholder="Afgeronde opleiding in techniek, 2 jaar ervaring, werken in ploegen"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* arbeidvoorwaarden KOPTEKST */}
          <label
            htmlFor="job-benefits-heading"
            className="text-jsMidnight text-sm"
          >
            Koptekst voor arbeidsvoorwaarden
          </label>
          <input
            type="text"
            name=""
            id="job-benefits-heading"
            placeholder="Wie bieden..."
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* arbeidvoorwaarden */}
          <label htmlFor="job-benefits" className="text-jsMidnight text-sm">
            Arbeidsvoorwaarden (scheiden met een komma om opsomming te maken)
          </label>
          <input
            type="text"
            name=""
            id="job-benefits"
            placeholder="Salaris tussen €2.800, 25 vakantiedagen, doorgroeimogelijkheden"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* uren */}
          <label htmlFor="hours" className="text-jsMidnight text-sm">
            Uren per week (alleen cijfers)
          </label>
          <input
            type="number"
            name=""
            id="hours"
            placeholder="40"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* opleiding */}
          <label htmlFor="education" className="text-jsMidnight text-sm">
            Opleiding
          </label>
          <input
            type="text"
            name=""
            id="education"
            placeholder="HBO"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* niveau */}
          <label htmlFor="level" className="text-jsMidnight text-sm">
            Niveau vacature (niet verplicht)
          </label>
          <select
            name=""
            id="level"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          >
            <option value="junior">NVT</option>
            <option value="junior">Junior</option>
            <option value="medior">Medior</option>
            <option value="senior">Senior</option>
          </select>

          {/* salaris */}
          <label htmlFor="salary" className="text-jsMidnight text-sm">
            Salaris (per maand)
          </label>
          <input
            type="text"
            name=""
            id="salary"
            placeholder="€2.800 - €3.400"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* spotlight */}
          <label htmlFor="featured" className="text-jsMidnight text-sm">
            Uitlichten?
          </label>
          <input
            type="checkbox"
            name=""
            id="featured"
            className=" ml-2 border-slate-300 rounded-md text-sm"
          />

          <ActionButton
            label="plaats vacature"
            type="submit"
            variant="blue"
            className="mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default JobCreationPage;
