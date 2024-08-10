import { useState } from 'react'
import signUpimg from "../assets/images/signup.gif"
import { Link,useNavigate } from 'react-router-dom'

import {toast} from "react-toastify"

// import avatar from "../assets/images/doctor-img01.png"
import uploadCloudinary from '../utils/uploadCloudinary'
import {HashLoader} from "react-spinners"

import { BASE_URL } from '../config'

const Signup = () => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [loading,setLoading]=useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  })

  const navigate=useNavigate()

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleFileInputChage=async (event)=>{
     
    const file=event.target.files[0];

    // later we will solve cloudinary to upload images
    const data=uploadCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({...formData,photo:data.url});
    

    
  }

  const submitHandler =async event=>{

    console.log(formData);
    event.preventDefault();
    setLoading(true);
    try {
      const res=await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      })

      const  {message}=await res.json();

      if(!res.ok){
        throw new Error(message);
      }
      setLoading(false)
      toast.success(message);
      navigate('/login')
    } catch (error) {
     toast.error(error.message);
     setLoading(false); 
    }
  }
  return (
    <section className='px-5  xl:px-0'>
      <div className=' max-w-[925px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>

          {/* {::::::::img box :::::::::::} */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg '>
            <figure className='rounded-lg'>
              <img src={signUpimg} className='w-full rounded-l-lg' alt="" />
            </figure>
          </div>

          {/* {:::::::signup form:::::} */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3>
              Create an  <span>account</span>
            </h3>
            <form action="" className='border-spacing-2' onSubmit={submitHandler} >
              <div className="mb-4 py-2">
                <input type="name"
                 placeholder="Full Name" 
                 name="name" 
                 value={formData.name}
                 onChange={handleInputChange}
                 className="w-full px-3 py-3 border-b border-solid focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
                />
              </div>

              <div className="mb-4">
                <input type="email" 
                placeholder="Enter your email"
                 name="email"
                 value={formData.eamil}
                 onChange={handleInputChange}
                  className="w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
                />
              </div>

              <div className="mb-4">
                <input 
                type="password" 
                placeholder="Enter your Password"
                 name="password"
                 value={formData.password}
                 onChange={handleInputChange}
                  className="w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
                />
              </div>
              <div className='mb-5 flex items-center justify-between  '>
                <label htmlFor=""
                  className='text-headingColor font-bold '
                >
                Are you a:</label>
                <select 
                name="role" 
                id="" 
                value={formData.role}
                onChange={handleInputChange}
                className='text-headingColor font-semibold text-[14px] leading-7 focus:outline-none px-2 py-2'>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>

                <label htmlFor=""
                  className='text-headingColor font-bold '
                >
                  Gender:
                </label>
                <label htmlFor="">
                  <select 
                  name="gender" 
                  id="" 
                  value={formData.gender}
                  onChange={handleInputChange}
                  className='text-headingColor font-semibold text-[14px] leading-7 focus:outline-none px-2 py-2'>
                    
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">others</option>
                  </select>
                </label>
              </div>

              <div className='mb-4 flex items-center gap-3'>
                {selectedFile && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor items-center jsutify-center '>
                  <img src={previewURL} alt="" className='rounded-full w-full' />
                </figure>}
                <div className='relative w-[150px] h-[50px]'>
                  <input type="file"
                    name='photo'
                    id="customFile"
                    accept='.jpg,.png'
                    onChange={handleFileInputChage}
                    className='absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer'
                  />
                  <label htmlFor="customFile" className='absolute px-4 py-3 rounded-lg bg-[#0066ff46] text-headingColor font-bold cursor-ponter  '>
                    Upload Photo
                  </label>

                </div>
              </div>

              <button 
              disabled={loading && true}
              className='w-full bg-primaryColor text-white px-3 py-2'>{loading?<HashLoader size={35}  color='#fff'/>:'sign up'}</button>
              <p className='text-center py-2'>Already have an account ?<Link to='/login' className='text-primaryColor'> Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup