import React from 'react'
import webdevelopment from './webdevelopment2.jpeg'
import appdevelopment from "./appdevelopment.jpeg"
import amazon from "./amazon2.png"
import gamedevelopment from './gamedevelopment.jpeg'
import shopify from './shopify2.jpeg'
import digitalmarketing from './digitalmarketing.jpeg'
import graphicdesigning from './graphicdesigning.jpeg'
import englishspoken from './english spoken.png'
import ai from './ai.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


export const Courses = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='courses11'>
                <div className="ani">
                    <div className="lines">
                        <div className="line1">
                            <p className='stnj'>Courses of Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='bcfd'>Lets check which course do you like</h1>
                        </div>
                        <NavLink to={'/admissionform'} className='fc'>Enroll Now</NavLink>
                    </div>
                </div>
            </div>
            <div className='courses'>
                <h1 className='courseheading'>Courses </h1>
                <div className='coursesup'>
                    <div className='courses1'>
                        <img className='courseimg' width={320} height={190} src={webdevelopment} />
                        <h2 className='coursesh2'>Web Development</h2>
                    </div>
                    <div className='courses2'>
                        <img className='courseimg' width={320} height={190} src={appdevelopment} />
                        <h2 className='coursesh2'>App Development</h2>
                    </div>
                    <div className='courses3'>
                        <img className='courseimg' width={320} height={190} src={amazon} />
                        <h2 className='coursesh2'>Amazon</h2>
                    </div>
                </div>
                <div className='coursesmiddle'>
                    <div className='courses4'>
                        <img className='courseimg' width={320} height={190} src={gamedevelopment} />
                        <h2 className='coursesh2'>Game Development</h2>
                    </div>
                    <div className='courses5'>
                        <img className='courseimg' width={320} height={190} src={shopify} />
                        <h2 className='coursesh2'>Shopify</h2>
                    </div>
                    <div className='courses6'>
                        <img className='courseimg' width={320} height={190} src={digitalmarketing} />
                        <h2 className='coursesh2'>Digital Marketing</h2>
                    </div>
                </div>
                <div className='coursesdown'>
                    <div className='courses7'>
                        <img className='courseimg' width={320} height={190} src={graphicdesigning} />
                        <h2 className='coursesh2'>Graphic Designing</h2>
                    </div>
                    <div className='courses8'>
                        <img className='courseimg' width={320} height={190} src={englishspoken} />
                        <h2 className='coursesh2'>English Spoken</h2>
                    </div>
                    <div className='courses9'>
                        <img className='courseimg' width={320} height={190} src={ai} />
                        <h2 className='coursesh2'>Artificial Intelligence</h2>
                    </div>
                </div>
                <NavLink to={'/admissionform'} className='coursesbtn'>Enroll Now</NavLink>
            </div>
        </div>
    )
}
