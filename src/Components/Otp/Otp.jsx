import React, { useContext, useState } from 'react'
import style from './Otp.module.css'
import logo from './../../assets/logo5.png'
import { useFormik } from 'formik'
import { compareSync } from 'bcryptjs'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { UserContext } from '../../Context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
export default function Otp() {

  const [optError, setOptError] = useState(false);

  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(UserContext);

  const navigate = useNavigate();


  async function otpSubmit(value) {
    setLoading(true);

    const values = {};

    values.email = localStorage.getItem('email');
    values.code = value.otp;

    const data = await axios.post(`http://tourestaapi.runasp.net/api/AdminAuth/verify-otp`, values)
      .catch((error) => {
        setOptError(error.response.data.message);
        setLoading(false);
      })

    if (data.data.action == "go_to_dashboard") {
      localStorage.removeItem('email');
      localStorage.setItem('token', data.data.token);
      setToken(data.data.token);
      navigate('/')
    }

  }


  const formik = useFormik({
    initialValues: {
      otp: ""
    }, onSubmit: otpSubmit
  })






  return <>
    <header>
      <div className="container mx-auto h-screen flex items-center justify-center">
        <section className='bg-gray-100 shadow-md rounded-md w-5/12 p-5'>
          <div className="logo bg-gray-300 w-20 h-20 flex justify-center items-center rounded-full">
            <img src={logo} alt="logo" />
          </div>
          <h2 className='text-3xl my-10 font-bold'>Login verification code</h2>
          <p className='text-md'>Enter the OTP code that has been sent to your email</p>
          <div className="inputField mt-10 flex flex-col justify-center">
            <form onSubmit={formik.handleSubmit}>
              <input type="text" name='otp' onChange={formik.handleChange} id='otp' className='bg-neutral-300 w-full rounded-md py-2 text-center text-xl focus:bg-neutral-100' />
              {optError ? <div className='bg-red-300 p-2 mt-5 rounded-md text-center font-extrabold'>{optError}</div> : null}
              {loading ?
                <button type='submit' className='mt-15 w-full py-2 rounded-md font-semibold cursor-pointer bg-blue-500'>
                  <BeatLoader color='#fff' />
                </button> :
                <button className='my-5 bg-[#18208B] py-3 rounded-md text-white cursor-pointer w-full' type='submit'>Submit</button>
              }

            </form>
          </div>
        </section>
      </div>
    </header>
  </>
}
