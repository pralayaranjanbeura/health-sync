import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../config.js"

import { toast } from 'react-toastify'
import { authContext } from "../context/AuthContext.jsx"
import { HashLoader } from "react-spinners"

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const submitHandler = async event => {

    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData),
      })

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role
        }
      })

      setLoading(false)
      toast.success(result.message);
      navigate('/home')
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }
  return (
    <section className="px-5 lg:px-0 bg-inherit">
      <div className="w-full max-w-[570px] mx-auto rounded-md shadow-md md:p-10 ">
        <h3 className="text-headingColor leadiing-9 text-[22px] font-bold mb-10">
          Hello! <span className="text-primaryColor"> Welcome</span> Back 🙋‍♂️
        </h3>

        <form action="" className="py-5 md:py-0 " onSubmit={submitHandler}>
          <div className="mb-4">
            <input type="email" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputChange}
              className="w-full px-3 py-3 border-b border-solid focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
            />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Enter your Password" name="password" value={formData.password} onChange={handleInputChange}
              className="w-full px-3 py-3 border-b border-solid border-[#0066ff61] focus:border-b-primaryColor text-headingColor placeholder:text-textColor  rounded cursor-pointer "
            />
          </div>
          <div>
            <button className="w-full mt-7 bg-primaryColor leading-7 rounded-lg  text-white px-3 py-2 boder-solid ">{loading?<HashLoader size={35} color="#fff"/>:"login"}</button>
          </div>
          <p className="text-center text-headingColor">Do you have an account?<Link to='/register' className="text-primaryColor"> Register</Link></p>
        </form>
      </div>

    </section>
  )
}

export default Login