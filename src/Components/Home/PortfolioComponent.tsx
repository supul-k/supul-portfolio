import backgroundImage from '../../images/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg'
import sldha from '../../images/projects/sldha.png'
import culling from '../../images/projects/culling.png'
import portfollio from '../../images/projects/portfolio.png'

const projects = [
    {
        name: 'SLDHA',
        role: 'Co-Founder / CEO',
        imageUrl: sldha
    },
    {
        name: 'Image Culling Software',
        role: 'Co-Founder / CEO',
        imageUrl: culling
    },
    {
        name: 'Personal Portfolio',
        role: 'Co-Founder / CEO',
        imageUrl: portfollio
    },
]

export default function PortfolioComponent() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-20 rounded-lg mb-20">
            <img
                src={backgroundImage}
                // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                style={{ opacity: 0.2 }}
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
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center mb-10">
                Projects
            </h1>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 m-4">
                {projects.map((project) => (
                    <li key={project.name}>
                        <div className="grid items-center justify-center gap-x-6">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-0.5 lg:h-80">
                                <img className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={project.imageUrl} alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-white text-center mt-1">{project.name}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="hidden sm:mb-8 mt-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                    Projects{' '}
                    <a href="/projects" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        view more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
