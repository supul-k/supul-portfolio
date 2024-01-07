import React from 'react'
import backgroundImage from '../images/fotis-fotopoulos-DuHKoV44prg-unsplash.webp'
import android from '../images/technologies/android.webp'
import bootstrap from '../images/technologies/bootstrap.webp'
import css from '../images/technologies/css-3.webp'
import figma from '../images/technologies/figma.webp'
import html from '../images/technologies/html-5.webp'
import java from '../images/technologies/java.webp'
import js from '../images/technologies/js.webp'
import kotlin from '../images/technologies/kotlin.webp'
import laravel from '../images/technologies/laravel.webp'
import c from '../images/technologies/letter-c.webp'
import mysql from '../images/technologies/mysql.webp'
import php from '../images/technologies/php.webp'
import postman from '../images/technologies/postman.webp'
import react from '../images/technologies/react.webp'
import django from '../images/technologies/django.webp'
import firebase from '../images/technologies/firebase.webp'
import github from '../images/technologies/github.webp'
import heroku from '../images/technologies/heroku.webp'
import nodejs from '../images/technologies/nodejs.webp'
import postgre from '../images/technologies/postgre.webp'
import python from '../images/technologies/python.webp'
import springboot from '../images/technologies/springboot.webp'
import tailwind from '../images/technologies/tailwind.webp'
import typescript from '../images/technologies/typescript.webp'
import arcgis from '../images/technologies/arcgis.webp'

const topics = [
  {
    topic: 'Programming languages',
    technologies: [
      {
        name: 'C',
        imageUrl: c
      },
      {
        name: 'Java',
        imageUrl: java
      },
      {
        name: 'JavaScript',
        imageUrl: js
      },
      {
        name: 'Kotlin',
        imageUrl: kotlin
      },
      {
        name: 'PHP',
        imageUrl: php
      },
      {
        name: 'Python',
        imageUrl: python
      },
      {
        name: 'TypeScript',
        imageUrl: typescript

      }],
  },
  {
    topic: 'Frameworks',
    technologies: [
      {
        name: 'Django',
        imageUrl: django
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
        name: 'ReactJS',
        imageUrl: react
      },
      {
        name: 'SpringBoot',
        imageUrl: springboot
      }],
  },
  {
    topic: 'Databases',
    technologies: [
      {
        name: 'MySQL',
        imageUrl: mysql
      },
      {
        name: 'PostgreSQL',
        imageUrl: postgre
      }],
  },
  {
    topic: 'Web Development',
    technologies: [
      {
        name: 'Android',
        imageUrl: android
      },
      {
        name: 'Bootstrap',
        imageUrl: bootstrap
      },
      {
        name: 'CSS',
        imageUrl: css
      },
      {
        name: 'Figma',
        imageUrl: figma
      },
      {
        name: 'HTML-5',
        imageUrl: html
      },
      {
        name: 'TailwindCSS',
        imageUrl: tailwind
      }],
  },
  {
    topic: 'Version Controlling',
    technologies: [
      {
        name: 'Firebase',
        imageUrl: firebase
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
        name: 'Postman',
        imageUrl: postman
      }],
  },
  {
    topic: 'GIS',
    technologies: [
      {
        name: 'ArcGIS',
        imageUrl: arcgis
      }],
  },
]

function MySkills() {
  return (
    <div className="bg-gray-800">
      <div className="relative isolate px-25 pt-14 pb-14 ml-10 mr-10 lg:px-8">
        <div
          className="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl m-20"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>


        {topics.map((topic) => (
          <div key={topic.topic}>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center mb-10">
              {topic.topic}
            </h1>
            <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-20 rounded-lg mb-20">
              <img
                src={backgroundImage}                
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
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                {topic.technologies.map((technology) => (
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
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default MySkills