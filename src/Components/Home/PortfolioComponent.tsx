import React, { useState } from 'react'
import ProjectModal from '../projects/ProjectModal'
import backgroundImage from '../../images/fotis-fotopoulos-DuHKoV44prg-unsplash.webp'
import sldha from '../../images/projects/sldha.webp'
import culling from '../../images/projects/culling.webp'
import gisfusion from '../../images/projects/gisfusion.webp'
import portfollio from '../../images/projects/portfolio.webp'
import payhere from '../../images/projects/payhere.webp'
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
        category: [
            { 
                id: 1,
                title: 'Laravel' 
            },
            {
                id: 2,
                title: 'MySQL' 
            },
            { 
                id: 3,
                title: 'ArcGIS' 
            },
        ],
        author: {
            id: 1,
            name: 'Supul Kalhara',
            role: 'Software Engineer',
            href: '#',
            imageUrl: profileImage,
        },
    },
    {
        "id": 2,
        "title": "PayHere Payment Gateway Integration",
        "titleImage": payhere,
        "href": "#",
        "description": "This project involves integrating the PayHere payment gateway into a web application using Symfony, PHP, and MySQL. The integration ensures secure and efficient handling of online payments, providing users with a seamless payment experience. The project includes features such as payment processing, transaction management, and webhook handling. Detailed documentation is provided to facilitate easy understanding and replication of the integration process.",
        "date": "June, 2024",
        "datetime": "2024-06-11",
        "category": [
            { "id": 1, "title": "Symfony" },
            { "id": 2, "title": "PHP" },
            { "id": 3, "title": "MySQL" }
        ],
        "author": {
            "name": "Supul Kalhara",
            "role": "Software Engineer",
            "href": "#",
            "imageUrl": profileImage
        }
    },
    {
        id: 3,
        title: 'GIS as a Service',
        titleImage: gisfusion,
        href: '#',
        description:
            'This is a comprehensive web platform that I have meticulously designed and developed to showcase my diverse set of skills and the multitude of projects that I have successfully completed. It serves as a digital portfolio, providing a detailed insight into my capabilities as a developer. The projects featured on this platform span various domains and technologies, reflecting my versatility and commitment to delivering high-quality solutions. Each project is accompanied by a thorough description, highlighting the problem it solves, the technologies used, and the methodologies followed during development. This platform is not just a testament to my past work, but it also represents my passion for continuous learning and my readiness to take on future challenges.',
        date: 'Feb , 2024',
        datetime: '2024-03-16',
        category: [
            { id: 1, title: 'ReactTS' },
            { id: 2, title: 'NodeJS' },
            { id: 3, title: 'PostgreSQL' },
        ],
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
        setSelectedId(id as number);
        setIsOpen(true);
    };

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-20 rounded-lg mb-20">
            <img
                src={backgroundImage}
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
            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2 m-4">
                {posts.map((post, index) => (
                    <article key={index} className="flex max-w-sm flex-col items-start justify-between cursor-pointer sm:ml-20" onClick={() => handleClick(post.id)}>
                        <div className="h-60 w-full bg-gray-50 overflow-hidden mb-3" style={{ borderRadius: '10px' }}>
                            <img src={post.titleImage} className="h-60 w-full " alt="" />
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-white">
                                {post.date}
                            </time>

                            {post.category.map((cat) => (
                                <p
                                    key={cat.id}
                                    className="relative z-10 rounded-full bg-gray-600 px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                                >
                                    <span key={cat.title}>{cat.title}</span>
                                </p>
                            ))}

                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600">
                                <span className="absolute inset-0" />
                                {post.title}
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-white">
                                    <span className="absolute inset-0" />
                                    {post.author.name}
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
