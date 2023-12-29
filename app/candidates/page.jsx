"use client";

import CandidateCard from "@/components/candidates/candidatecard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Candidates() {
  const candidates = [
    { id: 1, name: "Sourav Datta", email: "souravdatta1995@gmail.com" },
    { id: 2, name: "Sourav Datta", email: "souravdatta1995@gmail.com" },
    { id: 3, name: "Sourav Datta", email: "souravdatta1995@gmail.com" },
    { id: 4, name: "Sourav Datta", email: "souravdatta1995@gmail.com" },
  ];
  useEffect(() => {
    candidates
  })
  

  return (
    <>
      <h1 className="text-2xl font-bold">Candidates</h1>
      <p className="mt-2 text-sm text-gray-500">
        View and manage all candidates
      </p>

      <div className="mt-4 flex flex-wrap max-w-full gap-x-4 align-middle">
        <input
          id="candidate-search"
          name="search"
          type="search"
          className="min-w-0 grow rounded-md border-0 my-2
           bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset
           ring-primary focus:ring-2 focus:ring-inset focus:ring-purple-950 sm:leading-6"
          placeholder="Search"
        />
        <button className="bg-primary px-8 py-2 my-2 rounded-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-white" />
        </button>
        <div className="bg-green-600 px-8 py-2 my-2 rounded-md text-white">
          <a href="/candidates/add">Add Candidate</a>
        </div>
      </div>
      {candidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </>
  );
}
