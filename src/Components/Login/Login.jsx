import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import logo from './../../assets/finalLogo.png'
import { useFormik } from 'formik'
import axios from 'axios'
import { UserContext } from '../../Context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

export default function Login() {

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const { setToken } = useContext(UserContext)

  const navigate = useNavigate();

  async function loginSubmit(values) {
    
    setLoading(true)
    const data = await axios.post(`https://corsproxy.io/?http://tourestaapi.runasp.net/api/AdminAuth/verify-password`, values)
    .catch((error) => {
      setApiError(error.response.data.message);
      setLoading(false);
    })

    if (data.data.message == "Login successful") {
      localStorage.setItem('admin', data.data.token);
      setToken(data.data.token);
      navigate('/')
    }
    
  }

  function inputsValidation(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required"
    }

    if (!values.password) {
      errors.password = "Password is required"
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }, onSubmit: loginSubmit,
    validate: inputsValidation
  })


  return <>
    <section className='h-screen flex items-center'>
      <div className="container mx-auto bg-[#18208B] rounded-2xl shadow-2xl">

        <div className="caption flex">

          {/* First Main Part */}

          <div className="w-1/2">
            <figure>
              <img src={logo} className='w-full' alt="Logo" />
            </figure>
          </div>

          

          {/* Second Main Part */}

          <div className="w-1/2 bg-blue-50 rounded-r-2xl border-r-2 flex border-blue-200 justify-center py-5">

          

            <div className="form w-2/3 mx-auto mt-20">

              {/* Login title */}

              <div className="title text-white w-full text-center rounded-md mb-10">
                <h2 className='text-4xl font-bold py-3 text-[#0B3D91]'>Login</h2>
              </div>

              {apiError ? <div className='bg-red-400 text-white w-full rounded-md mb-10 p-5 font-bold text-center'>{apiError}</div> : null}

              <div>
                <form onSubmit={formik.handleSubmit}>

                  <label htmlFor="email" className='font-bold text-xl text-neutral-700'>Email</label>
                  <input type="email" name='email' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full pl-3 bg-neutral-100 rounded-md mt-3 py-2 border-2 border-blue-200 focus:border-[#0B3D91] focus:ring-2 focus:ring-transparent outline-none' />
                  {formik.touched.email && formik.errors.email ? <div className='text-red-400'>{formik.errors.email}</div> : null}

                  <label htmlFor="password" className='font-bold text-xl text-neutral-700 mt-15 block'>Password</label>
                  <input type="password" name='password' id='password' onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full pl-3 bg-neutral-100 rounded-md mt-3 py-2 border-2 border-blue-200 focus:border-[#0B3D91] focus:ring-2 focus:ring-transparent outline-none' />
                  {formik.touched.password && formik.errors.password ? <div className='text-red-400'>{formik.errors.password}</div> : null}

                  {loading ?
                    <button type='submit' className='mt-15 w-full py-2 rounded-md font-semibold cursor-pointer bg-blue-500'>
                      <BeatLoader color='#fff' />
                    </button> :
                    <button type='submit' className='mt-15 bg-transparent border border-[#0B3D91] text-[#0B3D91] w-full py-2 rounded-md font-semibold cursor-pointer transition-all duration-100 hover:bg-[#0B3D91] hover:text-white'>Submit</button>
                  }

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
}