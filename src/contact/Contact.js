import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='contact1'>
                <div className="ani">
                    <div className="lines">
                        <div className="line1">
                            <p className='cd'>Contact Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='bcfd'>Lets know how to contact us </h1>
                        </div>
                        <NavLink to={'/courses'} className='fc'>Find Course</NavLink>
                    </div>
                </div>
            </div>
            <div className='contact2'>
                <h1 className='cs'>Contact Sources</h1>
                <div className='clinks'>
                    <div className='clink1 clink'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin location" width="170" height="170" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <h3 className='cinfo'>6th floor,800/D 2/500D queens road,YBlock, lane Pakistan-1782</h3>
                    </div>
                    <div className='clink2 clink'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone phone" width="170" height="170" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <h3 className='cinfo'>
                            +10 367 826 2567 <br />
                            +10 234 678 0963 <br />
                            +10 235 765 8940
                        </h3>
                    </div>
                    <div className='clink3 clink'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail email" width="170" height="170" viewBox="0 0 24 24" stroke-width="1" stroke="#1eaaf1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <h3 className='cinfo'>
                            contact@Digix.com <br />
                            contactadmin@Digix.com <br />
                            contacthr@Digix.com <br />
                        </h3>
                    </div>
                </div>
                <NavLink to={'/admissionform'} className='contactbtn'>Enroll Now</NavLink>
            </div>

        </div>
    )
}
