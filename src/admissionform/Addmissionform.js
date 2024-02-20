import React from 'react'
import { NavLink } from 'react-router-dom'
import admission from './admission.jpeg'
import { useEffect } from 'react'

export const Addmissionform = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='admission1'>
                <div className="ani">
                    <div className="lines">
                        <div className="line1">
                            <p className='ad'>Admission in Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='lk'>Lets know how to Enroll in</h1>
                        </div>
                        <NavLink to={'/courses'} className='fc'>Find Course</NavLink>
                    </div>
                </div>
            </div>
            <h1 className='af'>Addmission Form</h1>
            <div className='form'>
                <div className='admissionform'>
                    <div className='name'>
                        <label>Full Name</label><br />
                        <input type='text' className='input fullname' />
                    </div>
                    <div className='phone'>
                        <label>Phone Number</label><br />
                        <input type='number' className='input number' />
                    </div>
                    <div className='emailblock'>
                        <label>Email</label><br />
                        <input type='email' className='input email' />
                    </div>
                    <div className='cnic'>
                        <label>CNIC</label><br />
                        <input type='text' className='input fullcnic' />
                    </div>
                    <div className='gender'>
                        <label>Gender</label><br />
                        <select className='selectgender'>
                            <option>----Select your gender-----</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                        </select>
                    </div>
                    <div className='qualification'>
                        <label>Qualification</label><br />
                        <select className=' selectqualification'>
                            <option>----Select your qualification-----</option>
                            <option>Matric</option>
                            <option>Intermediate</option>
                            <option>Bachelors</option>
                            <option>Masters</option>
                        </select>
                    </div>
                    <div className='selectcourses'>
                        <label>Courses</label><br />
                        <select className='selectccourseselector'>
                            <option>----Select your course-----</option>
                            <option>Web Development</option>
                            <option>App Development</option>
                            <option>Amazon</option>
                            <option>Shopify</option>
                            <option>English Spoken</option>
                            <option>Digital Marketing</option>
                            <option>Artificial Intelligence</option>
                            <option>Graphic Designing</option>
                            <option>Game Development</option>
                        </select>
                    </div>
                    <div className='enterbtn'>
                        <button className='admissionbtn'>Submit</button>
                    </div>
                </div>
                <div className='addright'>
                    <img className='addimg' src={admission}></img>
                </div>
            </div>
        </div>
    )
}
