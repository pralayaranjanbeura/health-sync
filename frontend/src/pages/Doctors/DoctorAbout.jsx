import React from 'react'
import { formatDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return (
    <div >
        <div >
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About Of
                <span className='text-irisBlueColor font-bold text-[24px] leading-0'>
                Lewis Hemilton
            </span>
            </h3>
            <p className='text__para font-semibold'>
            Dr. Lewis Hamilton is a highly skilled and renowned surgeon known for his precision and expertise in the operating room. With a calm demeanor and a dedication to patient care, Dr. Hamilton has earned a stellar reputation in the medical community. His innovative techniques and commitment to advancing surgical practices have made him a sought-after professional in his field. Patients and colleagues alike admire his meticulous approach and compassionate nature, making Dr. Lewis Hamilton a standout figure in modern surgery.
            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold font-[500]'>
                        {formatDate('12-04-2014')}-{formatDate('07-05-2018')};
                         
                        </span> 
                        <p className='text-[16px] leading-6 font-medium font-semibold text-textColor'>
                            PHD in Surgeon
                        </p>

                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apolo Hospital , New York</p>
                </li>
            </ul>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold font-[500]'>
                            {formatDate('12-04-2010')}-{formatDate('07-05-2014')};
                        </span> 
                        <p className='text-[16px] leading-6 font-medium font-semibold text-textColor'>
                            PHD in Surgeon
                        </p>

                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apolo Hospital , New York</p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>
            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#e9e8e5]'>
                    <span className='bg-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2010')}-{formatDate('07-05-2014')};
                    </span>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apolo Hospital , New York</p>
                </li>

                <li className='p-4 rounded bg-[#e9e8e5]'>
                    <span className='bg-yellowColor text-[15px] leading-6 font-semibold'>
                    {formatDate('12-04-2010')}-{formatDate('07-05-2014')};
                    </span>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>Sr. Surgeon</p>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>New Apolo Hospital , New York</p>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default DoctorAbout