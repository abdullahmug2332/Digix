import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='homeback'>
            <div className='home1'>
                <div className='ani' >
                    <div className="lines">
                        <div className="line1">
                            <p className='stnj'>Welcome to Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='bcfd'>Best <strong className='online'>online</strong> Courses from Digix</h1>
                        </div>
                        <NavLink to={'/courses'} className='fc'>Find Course</NavLink>
                    </div>
                </div>
            </div>
            <div className='cards'>
                <div className='card1'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate icon1" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                        <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                        <path d="M6 9l12 0" />
                        <path d="M6 12l3 0" />
                        <path d="M6 15l2 0" />
                    </svg>
                    <h2 className='cardsheadings'>Certified Teachers</h2>
                    <p className='cardsp'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                </div>
                <div className='card2'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school icon2" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                    </svg>
                    <h2 className='cardsheadings'>Special Education</h2>
                    <p className='cardsp'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                </div>
                <div className='card3'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books icon3" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                        <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                        <path d="M5 8h4" />
                        <path d="M9 16h4" />
                        <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" />
                        <path d="M14 9l4 -1" />
                        <path d="M16 16l3.923 -.98" />
                    </svg>
                    <h2 className='cardsheadings'>Books & Library</h2>
                    <p className='cardsp'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                </div>
                <div className='card4'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-certificate-2 icon4" width="56" height="56" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M10 7h4" />
                        <path d="M10 18v4l2 -1l2 1v-4" />
                        <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
                    </svg>
                    <h2 className='cardsheadings'>Certication</h2>
                    <p className='cardsp'>Even the all pwerfull pointing has no control aboblind text it is an almost unorthographic</p>
                </div>

            </div>
            <div className='banner'>
                <div className='bannerleft'>
                    <h1 className='heading'>Our Motive</h1>
                    <h1 className='bannerh1'>Teaching our students some good skills</h1>
                    <p className='bannerp'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
                <div className='bannerright'>
                    <NavLink to={'/courses'} className='bannerbtn'>Take a Course</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home
