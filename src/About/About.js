import React from 'react'
import group from './group.jpeg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='about1'>
                <div className='ani'>
                    <div className="lines">
                        <div className="line1">
                            <p className='stnj'>About Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='bcfd'>Here you know about our success stories</h1>
                        </div>
                        <NavLink to={'/courses'} className='fc'>Find Course</NavLink>
                    </div>
                </div>
            </div>
            <div className='about2'>
                <div className='about2left'>
                    <img className='about2img' src={group} width={550} height={660} />
                </div>
                <div className='about2right'>
                    <h1 className='about2h1'>About Digix</h1>
                    <p className='about2p '>Welcome to Digix, a pioneering educational institute dedicated to empowering minds and shaping futures. At Digix, we believe in the transformative power of education to unlock boundless potential. Our commitment lies in providing a dynamic learning environment where innovation meets knowledge, fostering a culture of curiosity and critical thinking. With a team of passionate educators and cutting-edge resources, Digix strives to redefine the educational experience. Join us on a journey of discovery, where learning knows no limits. At Digix, we are not just imparting knowledge; we are sculpting the architects of tomorrow. Welcome to a world of limitless possibilities.</p>
                    <div className='about2tags'>
                        <div className='about2up'>
                            <div className='tag1'>
                                <p className='numbers'>22+</p>
                                <p className='numbersinfo'>Years of Experience</p>
                            </div>
                            <div className='tag2'>
                                <p className='numbers'>70+</p>
                                <p className='numbersinfo'>Number of Staff</p></div>
                        </div>
                        <div className='about2down'>
                            <div className='tag3'>
                                <p className='numbers'>700+</p>
                                <p className='numbersinfo'>Certified Students</p></div>
                            <div className='tag4'>
                                <p className='numbers'>10+</p>
                                <p className='numbersinfo'>Awards Won</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner2'>
                <div className='bannerleft'>
                    <h1 className='heading'>Reviews</h1>
                    <h1 className='bannerh1'>What Parents Says About Us</h1>
                    <p className='bannerp'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                </div>
                <div className='bannerright'>
                    <NavLink to={'/courses'} className='bannerbtn'>Take a Course</NavLink>
                </div>
            </div>
        </div>
    )
}
