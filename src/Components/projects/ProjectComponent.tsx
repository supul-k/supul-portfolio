import React, {useState} from 'react'
import ProjectModal from './ProjectModal'
import sldha from '../../images/projects/sldha.png'
import culling from '../../images/projects/culling.png'
import portfollio from '../../images/projects/portfolio.png'
import mail from '../../images/projects/email_filter.jpg'
import profileImage from '../../images/WhatsApp Image 2022-12-16 at 2.29.57 AM.jpg'

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
    },
    {
        id: 4,
        title: 'Spam Email Filter',
        titleImage: mail,
        href: '#',
        description:
            "Explore our cutting-edge website crafted with Django and JavaScript, seamlessly blending robust backend functionality with dynamic frontend interactions. Enjoy a modern, sleek interface designed for intuitive navigation and responsiveness. Experience real-time updates, smooth transitions, and engaging user interactions, thanks to the powerful combination of Django's efficiency and JavaScript's interactivity. Whether you're a casual visitor or a registered user, our website delivers a secure, feature-rich experience that redefines online interaction. Join us on a digital journey where innovation meets reliability, enhancing your online experience with the perfect synergy of Django and JavaScript.",
        date: 'Jan , 2024',
        datetime: '2020-03-16',
        category: { title: 'Email'},
        author: {
            name: 'Supul Kalhara',
            role: 'Software Engineer',
            href: '#',
            imageUrl: profileImage,
        },
    },
]

export default function ProjectComponent() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleClick = (id: Number) => {
        // Here you can do something with the id
        // For example, you can save it to the state
        setSelectedId(id as number);
        setIsOpen(true);
      };

    return (
        <div className="bg-white py-24 sm:py-32" style={{ borderRadius: '10px' }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Completed Projects</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        projects that I have completed
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between" onClick={() => handleClick(post.id)}>
                            <div className="h-60 w-full bg-gray-50 overflow-hidden mb-3" style={{ borderRadius: '10px' }}>
                                {/* <a href="#"> */}
                                <img src={post.titleImage} className="h-60 w-full " alt="" />
                                {/* </a> */}
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <p
                                    // href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    {/* <a href={post.href}> */}
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    {/* </a> */}
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        {/* <a href={post.author.href}> */}
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        {/* </a> */}
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                {isOpen && <ProjectModal id={selectedId} onClose={() => setIsOpen(false)} />}
            </div>
        </div>
    )
}
