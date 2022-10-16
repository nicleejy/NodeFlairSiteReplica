import JobCard from "../components/JobCard";
import { jobsList } from "../data";

export default function Home() {
  return (
    <div className="grid items-center grid-cols-12 mx-auto max-w-7xl p-9 gap-7">
      {jobsList.map((job) => (
        <div
          className="col-span-12 overflow-x-auto overflow-y-auto transition duration-500 bg-white border-2 border-gray-300 sm:h-full hover:-translate-y-1 rounded-xl sm:col-span-6 lg:col-span-4 hover:drop-shadow-lg"
          key={job.company + job.jobTitle}
        >
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}
