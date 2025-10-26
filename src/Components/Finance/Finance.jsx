import React from 'react'
import style from './Finance.module.css'

export default function Finance() {

  return <>
    <section>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-between">

          <div className="w-4/12">
            <div className="content bg-white rounded-sm shadow w-11/12">

              <div className="caption flex justify-between items-center p-5">
                <div className="money">
                  <h4 className='text-gray-500'>Total Revenue</h4>
                  <p className='text-gray-700 text-4xl font-bold pt-10'>12000 EGP</p>
                </div>

                <div className="analysis flex items-center">

                  <div className="icon w-[30px] h-[30px] flex justify-center items-center rounded-full bg-green-100">
                    <span className='text-green-600'><i className='fas fa-arrow-up fa-sm'></i></span>
                  </div>

                  <div className="info">
                    <p className='ml-2 text-green-600'>5.5%</p>
                  </div>

                </div>
              </div>

              <div className="chart w-full">
                <svg
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-24"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,60 C50,30 100,80 150,50 C200,20 250,60 300,30 L300,100 L0,100 Z"
                    fill="rgba(99, 102, 241, 0.05)"
                  />
                  <path
                    d="M0,60 C50,30 100,80 150,50 C200,20 250,60 300,30"
                    stroke="#6366F1"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

            </div>

          </div>

          <div className="w-4/12 flex justify-center">
            <div className="content bg-white rounded-sm shadow  w-11/12">

              <div className="caption flex justify-between items-center p-5">
                <div className="money">
                  <h4 className='text-gray-500'>Refunds</h4>
                  <p className='text-gray-700 text-4xl font-bold pt-10'>500 EGP</p>
                </div>


              </div>

              <div className="chart w-full">
                <svg
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-24"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 C30,30 60,70 90,50 C120,30 150,70 180,50 C210,30 240,70 270,50 C285,45 295,55 300,50 L300,100 L0,100 Z"
                    fill="rgba(239, 68, 68, 0.05)"
                  />
                  <path
                    d="M0,50 C30,30 60,70 90,50 C120,30 150,70 180,50 C210,30 240,70 270,50 C285,45 295,55 300,50"
                    stroke="#EF4444"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>

              </div>

            </div>

          </div>

          <div className="w-4/12 flex justify-end">
            <div className="content bg-white rounded-sm shadow w-11/12">

              <div className="caption flex justify-between items-center p-5">
                <div className="money">
                  <h4 className='text-gray-500'>Avg. Revenue Per User</h4>
                  <p className='text-gray-700 text-4xl font-bold pt-10'>300 EGP</p>
                </div>

                <div className="info">
                  <p className='text-gray-500'>-3.00%</p>
                </div>


              </div>

              <div className="chart w-full">
                <svg
                  viewBox="0 0 300 100"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-24"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,60 C20,20 40,80 60,50 C80,20 100,80 120,50 C140,20 160,80 180,50 C200,20 220,80 240,50 C260,20 280,80 300,50 L300,100 L0,100 Z"
                    fill="rgba(168, 85, 247, 0.05)"
                  />
                  <path
                    d="M0,60 C20,20 40,80 60,50 C80,20 100,80 120,50 C140,20 160,80 180,50 C200,20 220,80 240,50 C260,20 280,80 300,50"
                    stroke="#A855F7"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}




