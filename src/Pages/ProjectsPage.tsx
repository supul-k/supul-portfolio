import React from 'react'
import ProjectComponent from '../Components/projects/ProjectComponent'

function ProjectsPage() {
  return (
    <div className="bg-gray-800">
      <div className="relative isolate px-25 pt-14 pb-14 ml-10 mr-10 lg:px-8">
        <div
          className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl m-20"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        < ProjectComponent />
      </div>
    </div>
  )
}

export default ProjectsPage