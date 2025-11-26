import React from 'react'
import style from './NotExists.module.css'
import logo from './../../assets/finalLocation.png'

export default function NotExists() {
  return <>
    <figure className="w-1/3 mx-auto">
      <img src={logo} alt="Not exists logo"/>
    </figure>
    <p className='text-8xl text-center mt-15 font-bold text-[#0B3D91]'>This page not exists</p>
  </>
}
