const experiences = [
    { 
        id: 1,
        name: 'DEONX', 
        description: 'DEONX', 
        time: '2024 Feb', 
        position: 'Associate Software Engineer' 
    },
    {
        id: 2,
        name: 'HasthiyaIT',
        description: 'HasthiyaIT',
        time: '2023 July',
        position: 'Associate Software Engineer'
    },   
    { 
        id: 3,
        name: 'ICTA', 
        description: 'ICTA', 
        time: '2023 January', 
        position: 'Software Engineer - Intern' 
    }

]

export default function ExperienceComponent() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-15 sm:py-20 py-20 rounded-lg mb-20">
            <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="sm:flex mx:grid mx:mb-10 mx:mt-10 mx-auto max-w-7xl px-6 lg:px-8 mb-4">
                <div className="mx-auto max-w-2xl sm:py-0 py-10 lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mr-5">Experience</h2>
                </div>
                <div></div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="relative mx-auto flex flex-col space-y-4 px-3 py-1 text-sm leading-6 text-white" style={{ maxWidth: 'fit-content' }}>
                        {experiences.map((experience) => (
                            <div key={experience.id} className="flex relative">
                                <div className="absolute w-0.5 bg-yellow-300 h-full top-0 left-1.5 mt-4"></div>
                                <div className="flex items">
                                    <div className="relative z-10 w-4 h-4 bg-yellow-300 rounded-full mb-2"></div>
                                    <span className="ml-2 text-yellow-300" style={{ width: '100px' }}><b>{experience.time}</b></span>
                                </div>
                                <div className="px-3 py-1 text-sm leading-6 text-white" style={{ maxWidth: 'fit-content' }}>
                                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{experience.name}</h2>
                                    <p className="mt-1 text-lg leading-8 text-gray-300">{experience.position}</p>
                                    <p className="mt-4 text-lg leading-8 text-gray-300">{experience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
