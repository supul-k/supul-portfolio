import React, {useState} from 'react'
import ProjectModal from '../projects/ProjectModal'
import backgroundImage from '../../images/fotis-fotopoulos-DuHKoV44prg-unsplash.webp'
import sldha from '../../images/projects/sldha.webp'
import culling from '../../images/projects/culling.webp'
import portfollio from '../../images/projects/portfolio.webp'
import profileImage from '../../images/WhatsApp Image 2022-12-16 at 2.29.57 AM.webp'

const posts = [
    {
        id: 1,
        title: 'Sri Lanka Digital Health Atlas',
        titleImage: sldha,
        href: '#',
        description:
            'This is a web platform allowing users to explore and filter health facilities and digital health systems on a map, with features like user registration, profile management, and detailed information on counts and names of facilities in specific areas.',
        date: 'Jun , 2023',
        datetime: '2020-03-16',
        category: { title: 'goverment', href: '#' },
        author: {
            name: 'Supul Kalhara',
            role: 'Software Engineer',
            href: '#',
            imageUrl: profileImage,       
        },
    },
    {
        id: 2,
        title: 'Image Culling Software',
        titleImage: culling,
        href: '#',
        description:
            'The Culling Software employs machine learning to assess and score multiple images for quality and relevance, enabling efficient filtering and sorting. With robust security measures, it ensures user privacy and data protection during the image selection process',
        date: 'Oct , 2023',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Supul Kalhara',
            role: 'Software Engineer',
            href: '#',
            imageUrl: profileImage,       
        },
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        titleImage: portfollio,
        href: '#',
        description:
            'This is a comprehensive web platform that I have meticulously designed and developed to showcase my diverse set of skills and the multitude of projects that I have successfully completed. It serves as a digital portfolio, providing a detailed insight into my capabilities as a developer. The projects featured on this platform span various domains and technologies, reflecting my versatility and commitment to delivering high-quality solutions. Each project is accompanied by a thorough description, highlighting the problem it solves, the technologies used, and the methodologies followed during development. This platform is not just a testament to my past work, but it also represents my passion for continuous learning and my readiness to take on future challenges.',
        date: 'Jan , 2024',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Supul Kalhara',
            role: 'Software Engineer',
            href: '#',
            imageUrl: profileImage,       
        },
    }    
]
export default function PortfolioComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClick = (id: Number) => {
        // Here you can do something with the id
        // For example, you can save it to the state
        setSelectedId(id as number);
        setIsOpen(true);
      };

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
                {posts.map((post) => (
                        <article key={post.id} className="flex max-w-sm flex-col items-start justify-between cursor-pointer sm:ml-20" onClick={() => handleClick(post.id)}>
                            <div className="h-60 w-full bg-gray-50 overflow-hidden mb-3" style={{ borderRadius: '10px' }}>
                                {/* <a href="#"> */}
                                <img src={post.titleImage} className="h-60 w-full " alt="" />
                                {/* </a> */}
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-white">
                                    {post.date}
                                </time>
                                <p
                                    // href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                                >
                                    {post.category.title}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                                    {/* <a href={post.href}> */}
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    {/* </a> */}
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-white">
                                        {/* <a href={post.author.href}> */}
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        {/* </a> */}
                                    </p>
                                    <p className="text-gray-500">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
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
            {isOpen && <ProjectModal id={selectedId} onClose={() => setIsOpen(false)} />}
        </div>
    )
}
