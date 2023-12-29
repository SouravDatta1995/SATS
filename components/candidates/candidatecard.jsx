export default function CandidateCard({ candidate }) {
  return (
    <div className="flex items-start border border-gray-300 bg-white shadow-md p-4 rounded-md mx-auto mt-2">
      <ul>
        <li className="">{candidate.name}</li>
        <li className="text-gray-500 text-sm">{candidate.email}</li>
      </ul>
    </div>
  );
}
