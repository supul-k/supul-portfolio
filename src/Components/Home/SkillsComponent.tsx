import backgroundImage from '../../images/fotis-fotopoulos-DuHKoV44prg-unsplash.webp'
import android from '../../images/technologies/android.webp'
import bootstrap from '../../images/technologies/bootstrap.webp'
import css from '../../images/technologies/css-3.webp'
import figma from '../../images/technologies/figma.webp'
import html from '../../images/technologies/html-5.webp'
import java from '../../images/technologies/java.webp'
import js from '../../images/technologies/js.webp'
import kotlin from '../../images/technologies/kotlin.webp'
import laravel from '../../images/technologies/laravel.webp'
// import c from '../../images/technologies/letter-c.webp'
import mysql from '../../images/technologies/mysql.webp'
import php from '../../images/technologies/php.webp'
import postman from '../../images/technologies/postman.webp'
import react from '../../images/technologies/react.webp'
import django from '../../images/technologies/django.webp'
import firebase from '../../images/technologies/firebase.webp'
import github from '../../images/technologies/github.webp'
import heroku from '../../images/technologies/heroku.webp'
import nodejs from '../../images/technologies/nodejs.webp'
import postgre from '../../images/technologies/postgre.webp'
import python from '../../images/technologies/python.webp'
import springboot from '../../images/technologies/springboot.webp'
import tailwind from '../../images/technologies/tailwind.webp'
import typescript from '../../images/technologies/typescript.webp'
import arcgis from '../../images/technologies/arcgis.webp'

const technologies = [
    {
        name: 'ReactJS',
        imageUrl: react
    },
    {
        name: 'JavaScript',
        imageUrl: js
    },
    {
        name: 'TypeScript',
        imageUrl: typescript
    },
    {
        name: 'Django',
        imageUrl: django
    },
    {
        name: 'HTML-5',
        imageUrl: html
    },
    {
        name: 'Laravel',
        imageUrl: laravel
    },
    {
        name: 'NodeJS',
        imageUrl: nodejs
    },
    {
        name: 'Python',
        imageUrl: python
    },
    {
        name: 'SpringBoot',
        imageUrl: springboot
    },
    {
        name: 'PostgreSQL',
        imageUrl: postgre
    },
    {
        name: 'PHP',
        imageUrl: php
    },
    {
        name: 'CSS',
        imageUrl: css
    },
    {
        name: 'Android',
        imageUrl: android
    },
    {
        name: 'Kotlin',
        imageUrl: kotlin
    },
    {
        name: 'Java',
        imageUrl: java
    },
    {
        name: 'MySQL',
        imageUrl: mysql
    },
    {
        name: 'Firebase',
        imageUrl: firebase
    },
    {
        name: 'Postman',
        imageUrl: postman
    },
    {
        name: 'TailwindCSS',
        imageUrl: tailwind
    },
    {
        name: 'GitHub',
        imageUrl: github
    },
    {
        name: 'heroku',
        imageUrl: heroku
    },
    {
        name: 'Bootstrap',
        imageUrl: bootstrap
    },
    {
        name: 'Figma',
        imageUrl: figma
    },
    {
        name: 'ArcGIS',
        imageUrl: arcgis
    }
]

export default function SkillsComponent() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-20 rounded-lg mb-20">
            <img
                src={backgroundImage}
                // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                style={{ opacity: 0.1 }}
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
                My Skills
            </h1>
            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                {technologies.map((technology) => (
                    <li key={technology.name}>
                        <div className="flex items-center justify-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={technology.imageUrl} alt="" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{technology.name}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="hidden sm:mb-8 mt-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-base leading-6 text-white ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                    My Skills{' '}
                    <a href="/myskills" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        view more <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
