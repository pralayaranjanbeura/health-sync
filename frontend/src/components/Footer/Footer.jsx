import React from 'react'

import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import { AiFillYoutube,AiFillGithub,AiOutlineInstagram } from 'react-icons/ai'

const socialLinks=[];

const quickLinks01=[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:'/',
    display:"Blog"
  }
]


const quickLinks02=[
  {
    path:"/find-a-doctor",
    display:"Find a doctor"
  },
  {
    path:"/",
    display:"Request an appointment"
  },
  {
    path:'/',
    display:"Find a loocation"
  },
  {
    path:"/",
    display:"Get an option"
  },
  {

  }
]

const quickLinks03=[
  {
    path:'/',
    display:"Donate",
  },
  {
    path:'contact',
    display:"Contact us"
  }
]

const Footer = () => {
  const year =new Date().getFullYear();
    return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px] '>
         
         
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 mt:4 font-[400] text-textColor'>
              Copyright {year} developed by Pralaya all right reserved.
            </p>
          </div>

          <div >
            <h2 className='text-[20px] leading-[30px] font-[700] text-textColor'>
              Quick Links
            </h2>

            <ul className='pt-3'>
              {quickLinks01.map((item,index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-5 font-[400] text-textColor'>
                  {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div >
            <h2 className='text-[20px] leading-[30px] font-[700] text-textColor'>
              I want to:
            </h2>

            <ul className='pt-3'>
              {quickLinks02.map((item,index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-5 font-[400] text-textColor'>
                  {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div >
            <h2 className='text-[20px] leading-[30px] font-[700] text-textColor'>
              Support
            </h2>

            <ul className='pt-3'>
              {quickLinks03.map((item,index)=>(
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer