import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export const Fee = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='fee1'>
                <div className="ani">
                    <div className="lines">
                        <div className="line1">
                            <p className='fsod'>Fee Structure of Digix</p>
                        </div>
                        <div className="line2">
                            <h1 className='bcfd'>Digix offers affordable fee structure</h1>
                        </div>
                        <NavLink to={'/courses'} className='fc'>Find Course</NavLink>
                    </div>
                </div>
            </div>
            <div className='fee2'>
                <h1 className='fs'>Fee Structure</h1>
                <table>
                    <tr className='bold'>
                        <th>Courses</th>
                        <th>Duration</th>
                        <th>1st Installment</th>
                        <th>2nd Installment</th>
                        <th>3rd Installment</th>
                        <th>Total Fee</th>
                    </tr>
                    <tr>
                        <th>Web Development</th>
                        <td>6 Months</td>
                        <td>20,000</td>
                        <td>20,000</td>
                        <td>10,000</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <th>App Development</th>
                        <td>6 Months</td>
                        <td>40,000</td>
                        <td>40,000</td>
                        <td>20,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <th>Game Development</th>
                        <td>12 Months</td>
                        <td>50,000</td>
                        <td>50,000</td>
                        <td>50,000</td>
                        <td>150,000</td>
                    </tr>
                    <tr>
                        <th>Amazon Dropshipping</th>
                        <td>6 Months</td>
                        <td>40,000</td>
                        <td>40,000</td>
                        <td>20,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <th>Shopify Dropshipping</th>
                        <td>6 Months</td>
                        <td>40,000</td>
                        <td>40,000</td>
                        <td>20,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <th>Digital Marketing</th>
                        <td>6 Months</td>
                        <td>15,000</td>
                        <td>15,000</td>
                        <td>10,000</td>
                        <td>40,000</td>
                    </tr>
                    <tr>
                        <th>Graphic Designing</th>
                        <td>6 Months</td>
                        <td>40,000</td>
                        <td>40,000</td>
                        <td>20,000</td>
                        <td>100,000</td>
                    </tr>
                    <tr>
                        <th>English Spoken</th>
                        <td>4 Months</td>
                        <td>7,000</td>
                        <td>7,000</td>
                        <td>6,000</td>
                        <td>20,000</td>
                    </tr>
                    <tr>
                        <th>Artificial Intelligence</th>
                        <td>6 Month</td>
                        <td>100,000</td>
                        <td>50,000</td>
                        <td>50,000</td>
                        <td>200,000</td>
                    </tr>
                </table>
                <NavLink to={'/admissionform'} className='feebtn'>Enroll Now </NavLink>
            </div>
        </div>
    )
}
