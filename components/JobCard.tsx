import React from 'react'

const JobCard = () => {
  return (

    <div className='p-5'>

      <img className='object-cover object-center mx-auto rounded-lg w-28 h-28'
        src="https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcjJJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1d8bbb7b7afc6f00051e424c987b775f67d154b8/Schroders.jpg" alt="schroders" 
      />

      <h3 className='mb-1 font-light text-md font-opensans'>
        Schroders
      </h3>

      <h1 className='text-xl font-bold font-opensans'>
        Information Security Architect
      </h1>

      <div className='flex items-center mt-2'>
        <h3 className='mb-1 font-light text-md font-opensans'>
          10,776 - 17,099 / Monthly 
        </h3>
        <div className='px-2 py-1 mx-3 bg-gray-100 rounded-md'>
          <h2 className='text-sm font-light text-gray-600 font-opensans'>EST</h2>
        </div>

      </div>

      <div className='flex items-center justify-between mt-5'>
        <h2 className='text-base italic font-bold font-opensans text-green'>about 7 hours ago</h2>
        <div className='px-2 py-1 bg-green-100 rounded-md'>
          <h2 className='text-base font-semibold font-opensans text-green'>Cybersec Eng</h2>
        </div>
      </div>

      <hr className='my-3'></hr>

      <div className='flex'>
        <div className='px-2 py-1 m-1 bg-gray-100 rounded-md'>
          <h2 className='text-base font-bold text-gray-600 font-opensans'>Strategy</h2>
        </div>

        <div className='px-2 py-1 m-1 bg-gray-100 rounded-md'>
          <h2 className='text-base font-bold text-gray-600 font-opensans'>Azure</h2>
        </div>

        <div className='px-2 py-1 m-1 bg-gray-100 rounded-md'>
          <h2 className='text-base font-bold text-gray-600 font-opensans'>Ansible</h2>
        </div>
      </div>
    </div>
  )
}

export default JobCard