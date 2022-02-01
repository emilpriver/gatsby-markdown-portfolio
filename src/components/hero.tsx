import React from 'react'
import {StaticImage} from "gatsby-plugin-image";

const Hero: React.FC = () => {
  return (
      <>
        <div className="rounded-3xl p-6 bg-white block float-left col-span-2">
          <StaticImage src="../images/favicon.png" alt="Emil Privér" width={100} height={100}/>
          <h3 className="mt-2 text-hero-dark antialiased font-medium text-xl">Hi, im Emil Privér. Software developer with focus
            backend, love tech, serverless, distributed systems and trying new stuffs.</h3>
        </div>
        <div className="col-span-1">
          <a href="https://twitter.com/emil_priver" target="_blank" rel="nofollow noopener noreferrer"
             className="hover:scale-105 transition-all bg-twitter-blue flex items-center justify-center rounded-3xl h-full w-full min-h-44">
            <svg xmlns="http://www.w3.org/2000/svg" width="75.121" height="61.052" viewBox="0 0 75.121 61.052"
                 className="fill-white">
              <path id="icons8-twitter"
                    d="M75.063,12.844a30.83,30.83,0,0,1-8.858,2.43A15.451,15.451,0,0,0,72.984,6.75,30.947,30.947,0,0,1,63.2,10.485,15.418,15.418,0,0,0,36.937,24.542,43.765,43.765,0,0,1,5.17,8.441,15.445,15.445,0,0,0,9.94,29.019a15.4,15.4,0,0,1-6.984-1.932v.193A15.438,15.438,0,0,0,15.317,42.4a15.421,15.421,0,0,1-4.057.538,14.847,14.847,0,0,1-2.9-.28,15.447,15.447,0,0,0,14.4,10.709,30.9,30.9,0,0,1-19.14,6.595,30.3,30.3,0,0,1-3.671-.217A43.544,43.544,0,0,0,23.56,66.666c28.348,0,43.852-23.483,43.852-43.846,0-.667-.018-1.341-.04-2a31.325,31.325,0,0,0,7.692-7.98Z"
                    transform="translate(0.058 -5.614)">
              </path>
            </svg>
          </a>
        </div>
        <div className="col-span-1">
        <a href="https://github.com/emilpriver" target="_blank" rel="nofollow noopener noreferrer"
           className="hover:scale-105 transition-all bg-black flex items-center justify-center rounded-3xl h-full w-full min-h-44">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96px" height="96px" className="fill-white">
            <path d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z" opacity="0"/>
            <path
                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
          </svg>
        </a>
        </div>
      </>
  )
}

export default Hero
