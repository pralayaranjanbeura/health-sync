import {useState} from 'react'

import doctorImg from "../../assets/images/doctor-img02.png"
import starIcon from "../../assets/images/Star.png"
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = () => {

  const [tab,setTab]=useState('about');
  return (
    <>
    <section>
      <div className='max-w-[1170px] mx-auto px-5'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[220px] max-h-[220px]'>
                <img src={doctorImg} alt="" />
                </figure> 
              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 rounded font-semibold'>Surgeon 
                </span>
                <h3 className='font-bold text-headingColor text-[26px] leading-7 pt-3'>
                  Lwis Hemilton
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] leadding-5 text-[16px] lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="" />4.8
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>(272)</span>
                </div>
                    <p className='text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[15px] '>
                      The best surgeon who provides the best treatement to all and also gurantees your healthy life
                    </p>
              </div>
              </div>

                <div className='mt-[50px] border-b border-solid gap-5px border-[#0066ff34]'>
                  <button  onClick={()=>setTab("about")}
                    className={`${tab==="about" && "border-solid border-b border-primaryColor" } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                      About
                  </button>

                  <button  onClick={()=>setTab("feedback")}
                    className={`${tab==="feedback" && "border-solid border-b border-primaryColor" } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                      FeedBack
                  </button>

                </div>


                <div className='max-w-[1170px] px-5 mx-auto'>
                  <div className='grid md:grid-cols-3 gap-[50px]'></div>
                </div>
              

                <div className='mt-[50px]'>
                  {
                    tab==='about' && <DoctorAbout/>
                  }
                  {

                    tab==='feedback' && <Feedback/>
                  }
                </div>     
          </div>
          <div>
            <SidePanel/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default DoctorDetails