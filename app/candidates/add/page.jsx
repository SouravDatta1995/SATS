"use client";

import { useEffect, useState } from "react";

const AddCandidate = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <form className="mt-4">
      <div className="mb-4 gap-4 columns-2">
        <input
          type="text"
          id="name"
          className="block w-full px-2 py-3 rounded-md border-primary shadow-sm focus:border-purple-950 focus:ring-purple-950"
          placeholder="Enter Candidate Name"
        />
        <input
          type="email"
          id="email"
          className=" block w-full px-2 py-3 rounded-md border-primary shadow-sm focus:border-purple-950 focus:ring-purple-950 "
          placeholder="Enter Candidate Email"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
      <button
        type="reset"
        className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
      >
        Reset
      </button>
    </form>
  );
};

export default AddCandidate;
