
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {toast} from "react-toastify"

// import avatar from "../assets/images/doctor-img01.png"
import uploadCloudinary from '../../utils/uploadCloudinary'
import {HashLoader} from "react-spinners"

import { BASE_URL, token } from '../../config'
const ProfileSettings = (user) => {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const [loading,setLoading]=useState(false);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      photo: null,
      gender: '',
      bloodType: '',
    })
  
    const navigate=useNavigate()
    useEffect(()=>{
        setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType})
    },[user]);
  
    const handleInputChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  
  
    const handleFileInputChage=async (event)=>{
       
      const file=event.target.files[0];
  
      // later we will solve cloudinary to upload images
      const data=uploadCloudinary(file);
     
      setSelectedFile(data.url);
      setFormData({...formData,photo:data.url});
      
  
      
    }
  
    const submitHandler =async event=>{
  
      console.log(formData);
      event.preventDefault();
      setLoading(true);
      try {
        const res=await fetch(`${BASE_URL}/users/${user._id}`,{
          method:'put',
          headers:{
          'Content-Type':"application/json",
          Authorization:`Bearer ${token}`
          },
          body:JSON.stringify(formData),
        })
  
        const  {message}=await res.json();
  
        if(!res.ok){
          throw new Error(message);
        }
        setLoading(false)
        toast.success(message);
        navigate('/users/profile/me')
      } catch (error) {
       toast.error(error.message);
       setLoading(false); 
      }
    }
  return (
    <div className='mt-10'><form action="" className='border-spacing-2' onSubmit={submitHandler} >
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
       value={formData.email}
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
    <div className="mb-4">
      <input 
      type="loodType" 
      placeholder="Blood Type"
       name="bloodType"
       value={formData.password}
       onChange={handleInputChange}
        className="w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
      />
    </div>
    <div className='mb-5 flex items-center  '>
      
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
      {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor items-center jsutify-center '>
        <img src={formData.photo} alt="" className='rounded-full w-full' />
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
         {selectedFile?selectedFile.name:'upload photo'}
        </label>

      </div>
    </div>

    <button 
    disabled={loading && true}
    className='w-full bg-primaryColor text-white px-3 py-2'>{loading ?<HashLoader size={35}  color='#fff'/>:'Update'}</button>

  </form>
  </div>
  )
}

export default ProfileSettings