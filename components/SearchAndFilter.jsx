"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import ActionButton from "@/components/ActionButton";

const SearchAndFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }

    router.push(`/vacatures?${params.toString()}`);
  };

  return (
    <div className="bg-jsOffWhite p-6 border border-slate-300 rounded-md">
      {/* search container */}
      <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Zoek op functie of plaats"
          className="w-full bg-white py-2 px-3 rounded-md border border-slate-300 text-sm"
        />

        <ActionButton type="submit" variant="green">
          <FaMagnifyingGlass />
        </ActionButton>
      </form>

      {/* filter container */}
      <div className="flex md:flex-row flex-wrap items-center md:items-center gap-3">
        <p className="text-jsText text-sm">Filter per categorie:</p>
        {/* TO DO: add category filters */}
      </div>
    </div>
  );
};

export default SearchAndFilter;
