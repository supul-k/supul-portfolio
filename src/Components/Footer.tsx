import profileImage from '../images/WhatsApp Image 2022-12-16 at 2.29.57 AM.webp'
import facebook from '../images/contact/facebook.webp'
import linkedin from '../images/contact/linkedin.webp'
import instagram from '../images/contact/instagram.webp'
import whatsapp from '../images/contact/whatsapp.webp'

const socials = [
    {
        id: 1,
        name: 'facebook',
        imageUrl: facebook,
        href: 'https://www.facebook.com/supul.kalhara'
    },
    {
        id: 2,
        name: 'linkedin',
        imageUrl: linkedin,
        href: 'http://www.linkedin.com/in/supulkalhara'
    },
    {
        id: 3,
        name: 'instagram',
        imageUrl: instagram,
        href: 'https://www.instagram.com/___kalhara.supul___/'
    },
    {
        id: 4,
        name: 'whatsapp',
        imageUrl: whatsapp,
        href: 'https://wa.me/94710564090'
    },
]

export default function Footer() {
    return (
        <section className="relative isolate overflow-hidden bg-black px-6 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto">
                <div className='flex justify-center items-center py-10 mb-10'>
                    <div className="h-0.5 bg-yellow-300 w-1/3 self-center"></div>
                    <div className="mx-auto flex space-x-2 w-1/3 justify-center">
                        {socials.map((social) => (
                            <li key={social.id}>
                                <div className="flex items-center justify-center gap-x-6 self-center">
                                    <a href={social.href}>
                                        <img className="sm:h-16 sm:w-16 mx:h-6 mx:w-6 rounded-full" src={social.imageUrl} alt="" />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </div>
                    <div className="h-0.5 bg-yellow-300 w-1/3 self-center"></div>
                </div>
                <p className="mt-4 text-center text-xl text-gray-400">
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <figure className="mt-10 mb-2">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p className="mb-2 text-white">
                            Developed by Supul Kalhara
                        </p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img
                            className="mx-auto h-10 w-10 rounded-full"
                            src={profileImage}
                            // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-white">Supul Kalhara</div>
                            <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <div className="text-white"><p>
                                © {new Date().getFullYear()} Supul Kalhara. All rights reserved.
                            </p></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
