import JobCard from "../components/JobCard";


export default function Home() {
  return (

    <div className="grid grid-cols-12 p-9 gap-7">
      
      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>

      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>

      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>
      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>

      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>

      <div className="max-w-md col-span-12 bg-white border-2 border-gray-300 rounded-xl sm:col-span-6 lg:col-span-4">
        <JobCard/>
      </div>

    </div>
    
  )
}


