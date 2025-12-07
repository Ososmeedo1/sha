import React from 'react'
import style from './RecentEmployees.module.css'
import { Link } from 'react-router-dom'

export default function RecentEmployees() {
  return <>
    <section className='my-10'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="trips bg-white rounded-sm shadow">
              {/* Title */}
              <div className="title p-5">
                <h2 className='text-gray-600 text-xl'>Employees</h2>
              </div>

              {/* Table */}

              <table className='w-full border border-gray-200 text-sm text-center'>
                <thead className='bg-gray-100 text-gray-700'>
                  <tr>
                    <th className='p-5'>No.</th>
                    <th className='p-5'>Image</th>
                    <th className='p-5'>EmployeeId</th>
                    <th className='p-5'>No. of trips</th>
                    <th className='p-5'>Name</th>
                  </tr>
                </thead>
                <tbody className='text-gray-500'>
                  <tr className='border-b border-gray-200'>
                    <td className='py-5'>1</td>
                    <td className='flex items-center justify-center h-[60px]'>
                      <div className='w-[30px] h-[30px] flex justify-center items-center bg-green-200 rounded-full'>
                        <span><i className='fas fa-user'></i></span>
                      </div>
                    </td>
                    <td>1515</td>
                    <td>5</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Aly Hassan</p>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <td className='py-5'>2</td>
                    <td className='flex items-center justify-center h-[60px]'>
                      <div className='w-[30px] h-[30px] flex justify-center items-center bg-blue-200 rounded-full'>
                        <span><i className='fas fa-user'></i></span>
                      </div>
                    </td>
                    <td>1515</td>
                    <td>150</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Anwar Youssef</p>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <td className='py-5'>3</td>
                    <td className='flex items-center justify-center h-[60px]'>
                      <div className='w-[30px] h-[30px] flex justify-center items-center bg-yellow-200 rounded-full'>
                        <span><i className='fas fa-user'></i></span>
                      </div>
                    </td>
                    <td>1515</td>
                    <td>50</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Adam Yasseen</p>
                      </div>
                    </td>
                  </tr>
                  <tr className='border-b border-gray-200'>
                    <td className='py-5'>4</td>
                    <td className='flex items-center justify-center h-[60px]'>
                      <div className='w-[30px] h-[30px] flex justify-center items-center bg-orange-200 rounded-full'>
                        <span><i className='fas fa-user'></i></span>
                      </div>
                    </td>
                    <td>1515</td>
                    <td>50</td>
                    <td>
                      <div className="flex flex-col">
                        <p>Anas Belal</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="details flex justify-end py-5 pr-5">
                <Link to={'/employees'} className='border border-gray-300 rounded-md text-gray-500 px-10 py-2 transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-slate-700'>Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
