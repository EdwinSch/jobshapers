"use client";

import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import createJob from "../actions/createJob";
import ActionButton from "@/components/ActionButton";

const JobCreationPage = () => {
  const [state, formAction] = useActionState(createJob, {});
  const router = useRouter();

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success("vacature opgeslagen");
      router.push("/vacatures");
    }
  }, [state]);

  return (
    <div className="bg-jsOffWhite">
      <div className="mx-auto py-8 max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="mb-2 text-center text-red-600 font-semibold">
          -- Protected Route --
        </p>

        {/* form */}
        <form
          action={formAction}
          className="flex-1 p-6 bg-white border border-slate-300 rounded-md"
        >
          <h1 className="text-xl font-semibold text-jsMidnight">
            Maak een vacature
          </h1>
          <p className="mb-5 text-jsText text-sm">
            Vul de velden in om een vacature te plaatsen.
          </p>

          {/* vacature nummer */}
          <label htmlFor="vacatureNummer" className="text-jsMidnight text-sm">
            Vacature nummer
          </label>
          <input
            type="text"
            name="vacatureNummer"
            id="vacatureNummer"
            placeholder="vac-001"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* vacature titel */}
          <label htmlFor="vacatureTitel" className="text-jsMidnight text-sm">
            Vacature titel
          </label>
          <input
            type="text"
            name="vacatureTitel"
            id="vacatureTitel"
            placeholder="Procesoperator"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            required
          />

          {/* vacature SUBtitel */}
          <label htmlFor="subTitel" className="text-jsMidnight text-sm">
            Subtitel/diensten
          </label>
          <select
            name="subTitel"
            id="subTitel"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          >
            <option value="dagdienst">Dagdienst</option>
            <option value="2 ploegendienst">2 ploegendienst</option>
            <option value="3 ploegendienst">3 ploegendienst</option>
            <option value="4 ploegendienst">4 ploegendienst</option>
            <option value="5 ploegendienst">5 ploegendienst</option>
          </select>

          {/* vacature Categorie */}
          <label htmlFor="categorie" className="text-jsMidnight text-sm">
            Categorie
          </label>
          <select
            name="categorie"
            id="categorie"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          >
            <option value="HR & Office">HR & Office</option>
            <option value="Commercieel & Sales">Commercieel & Sales</option>
            <option value="Infra & Civiel">Infra & Civiel</option>
            <option value="Techniek">Techniek</option>
            <option value="ZZP & Projectopdrachten">
              ZZP & Projectopdrachten
            </option>
          </select>

          {/* werkgever */}
          <label htmlFor="werkgever" className="text-jsMidnight text-sm">
            Bedrijfsnaam/werkgever (niet zichtbaar voor client)
          </label>
          <input
            type="text"
            name="werkgever"
            id="werkgever"
            placeholder="Pico Bello BV"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* standplaats */}
          <label htmlFor="standplaats" className="text-jsMidnight text-sm">
            Standplaats
          </label>
          <input
            type="text"
            name="standplaats"
            id="standplaats"
            placeholder="Rotterdam"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* introductie */}
          <label htmlFor="introductie" className="text-jsMidnight text-sm">
            Introductie tekst
          </label>
          <textarea
            name="introductie"
            id="introductie"
            placeholder="Wil jij werken met geavanceerde installaties in een schone en veilige omgeving? Dan is dit jouw kans!"
            className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            style={{ resize: "none" }}
          />

          {/* functieomschrijving */}
          <label
            htmlFor="functieomschrijving"
            className="text-jsMidnight text-sm"
          >
            Functieomschrijving
          </label>
          <textarea
            name="functieomschrijving"
            id="functieomschrijving"
            placeholder="In deze rol bewaak je het productieproces en zorg je dat de installaties optimaal functioneren. Je stuurt bij waar nodig en voert kwaliteitscontroles uit."
            className="min-h-28 mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
            style={{ resize: "none" }}
          />

          {/* functie-eisen KOPTEKST */}
          <label htmlFor="eisenKoptekst" className="text-jsMidnight text-sm">
            Koptekst voor functie-eisen
          </label>
          <input
            type="text"
            name="eisenKoptekst"
            id="eisenKoptekst"
            placeholder="Wat jij meebrengt..."
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* functie-eisen */}
          <label htmlFor="functieEisen" className="text-jsMidnight text-sm">
            Functie-eisen (scheiden met een komma om opsomming te maken)
          </label>
          <input
            type="text"
            name="functieEisen"
            id="functieEisen"
            placeholder="Afgeronde opleiding in techniek, 2 jaar ervaring, werken in ploegen"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* arbeidvoorwaarden KOPTEKST */}
          <label
            htmlFor="voorwaardenKoptekst"
            className="text-jsMidnight text-sm"
          >
            Koptekst voor arbeidsvoorwaarden
          </label>
          <input
            type="text"
            name="voorwaardenKoptekst"
            id="voorwaardenKoptekst"
            placeholder="Wie bieden..."
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* arbeidvoorwaarden */}
          <label
            htmlFor="arbeidsvoorwaarden"
            className="text-jsMidnight text-sm"
          >
            Arbeidsvoorwaarden (scheiden met een komma om opsomming te maken)
          </label>
          <input
            type="text"
            name="arbeidsvoorwaarden"
            id="arbeidsvoorwaarden"
            placeholder="Salaris tussen €2.800, 25 vakantiedagen, doorgroeimogelijkheden"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* uren */}
          <label htmlFor="uren" className="text-jsMidnight text-sm">
            Uren per week (alleen cijfers)
          </label>
          <input
            type="number"
            name="uren"
            id="uren"
            placeholder="40"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* opleiding */}
          <label htmlFor="opleiding" className="text-jsMidnight text-sm">
            Opleiding
          </label>
          <input
            type="text"
            name="opleiding"
            id="opleiding"
            placeholder="HBO"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* niveau */}
          <label htmlFor="niveau" className="text-jsMidnight text-sm">
            Niveau vacature (niet verplicht)
          </label>
          <select
            name="niveau"
            id="niveau"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          >
            <option value="junior">NVT</option>
            <option value="junior">Junior</option>
            <option value="medior">Medior</option>
            <option value="senior">Senior</option>
          </select>

          {/* salaris */}
          <label htmlFor="salaris" className="text-jsMidnight text-sm">
            Salaris (per maand)
          </label>
          <input
            type="text"
            name="salaris"
            id="salaris"
            placeholder="€2.800 - €3.400"
            className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
          />

          {/* spotlight */}
          <label htmlFor="featured" className="text-jsMidnight text-sm">
            Uitlichten?
          </label>
          <input
            type="checkbox"
            name="featured"
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
