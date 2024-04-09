import React from 'react'

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
        <div className="flex gap-6 text-6xl font-semibold sm:text-3xl">
            <h1 className='text-secondary M'>M</h1>
            <h1 className='text-tertiary K'>K</h1>

        </div>
    </div>
  )
}

export default Loader