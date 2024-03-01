import { useState, useEffect } from 'react';

export default function HeroComponent() {
    const [displayText, setDisplayText] = useState('');

    const useTypewriter = (speed = 50, text:String) => {
        // useEffect(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayText(prevText => prevText + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => {
                clearInterval(typingInterval);
            };
    };

    const TypeWriter = () => {
        useTypewriter(50, 'sSUPUL KALHARA');
    }

    const TypeWriterLeave = () => {
        setTimeout(() => {
            setDisplayText('');
        }, 1000);
    }

    return (
        <div onMouseEnter={TypeWriter} onMouseLeave={TypeWriterLeave}>
            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-20">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                        Proffetional CV Resume.{' '}
                        <a href="/resume" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Hi 👋, I'm {displayText}
                        </h1>
                        <p className="text-2xl font-semibold text-white sm:text-3xl">
                            <span>A passionate fullstack developer in Sri Lanka</span>
                        </p>
                        <p className="mt-6 text-lg leading-8 text-white">
                            I'm a passionate software developer with experience in various programming languages and frameworks. I specialize in creating efficient, scalable, and manageable software solutions. I have a strong understanding of software development principles and a knack for solving complex problems.                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/projects"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Projects
                            </a>
                            <a href="https://github.com/supul-k" className="text-sm font-semibold leading-6 text-white">
                                GitHub <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
