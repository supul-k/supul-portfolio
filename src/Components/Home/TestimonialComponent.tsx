import profileImage from '../../images/WhatsApp Image 2022-12-16 at 2.29.57 AM.jpg'

export default function TestimonialComponent() {
    return (
        <section className="relative isolate overflow-hidden bg-gray-800 px-6 py-24 sm:py-32 lg:px-8">
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
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p className="mb-2 text-white">
                            Developed with ❤️ by Supul Kalhara
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
                            © {new Date().getFullYear()} Your Name. All rights reserved.
                        </p></div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
