import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import sldha from '../../images/projects/sldha.webp'
import culling from '../../images/projects/culling.webp'
import portfollio from '../../images/projects/portfolio.webp'
import mail from '../../images/projects/email_filter.webp'
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
        category: { title: 'goverment'},
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
        category: { title: 'Marketing'},
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
        category: { title: 'Marketing'},
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

interface ProjectModalProps {
    id: number | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ id, onClose }) => {
    const [open] = useState(true)
    const cancelButtonRef = useRef(null)

    const handleClose = () => {
        onClose();
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white pb-4 sm:pb-4">
                                    <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 border-t border-gray-200 lg:mx-0 lg:max-w-none">
                                        {id !== null && (
                                            <article key={posts[id - 1].id} className="flex max-w-xl flex-col items-start justify-between">
                                                <div className="h-60 w-full bg-gray-50 overflow-hidden mb-3" style={{ borderRadius: '10px' }}>
                                                    {/* <a href="#"> */}
                                                    <img src={posts[id - 1].titleImage} className="h-60 w-full " alt="" />
                                                    {/* </a> */}
                                                </div>
                                                <div className="flex items-center gap-x-4 text-xs px-4">
                                                    <time dateTime={posts[id - 1].datetime} className="text-gray-500">
                                                        {posts[id - 1].date}
                                                    </time>
                                                    <p
                                                        // href={post.category.href}
                                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                                    >
                                                        {posts[id - 1].category.title}
                                                    </p>
                                                </div>
                                                <div className="group relative">
                                                    <h3 className="mt-3 px-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                        {/* <a href={post.href}> */}
                                                        <span className="absolute inset-0" />
                                                        {posts[id - 1].title}
                                                        {/* </a> */}
                                                    </h3>
                                                    <p className="mt-5 px-4 text-sm leading-6 text-gray-600">{posts[id - 1].description}</p>
                                                </div>
                                                <div className="relative mt-8 px-4 flex items-center gap-x-4">
                                                    <img src={posts[id - 1].author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                                    <div className="text-sm leading-6">
                                                        <p className="font-semibold text-gray-900">
                                                            {/* <a href={post.author.href}> */}
                                                            <span className="absolute inset-0" />
                                                            {posts[id - 1].author.name}
                                                            {/* </a> */}
                                                        </p>
                                                        <p className="text-gray-600">{posts[id - 1].author.role}</p>
                                                    </div>
                                                </div>
                                            </article>
                                        )}
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">                                    
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => handleClose()}
                                        ref={cancelButtonRef}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ProjectModal;
