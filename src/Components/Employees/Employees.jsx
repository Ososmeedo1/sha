import React, { useState } from 'react'
import style from './Employees.module.css'
import { Link } from 'react-router-dom'
import EmployeesForm from '../EmployeesForm/EmployeesForm'

export default function Employees() {
  
  const [open, setOpen] = useState(false)
  
  
  
  
  return <>
    <section className='mt-5'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="trips bg-white rounded-sm shadow">
              {/* Title */}
              <div className="title p-5 flex justify-between">
                <h2 className='text-gray-700 text-3xl font-bold'>Employees</h2>
                <button onClick={() => setOpen(true)} className="bg-red-500 text-white py-2 px-3 rounded-sm cursor-pointer hover:bg-red-400">Add Employee</button>
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
                    <th className='p-5'>Actions</th>
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
                    <td>
                      <div className='flex justify-evenly'>
                      <span><i className='fas fa-trash text-lg text-red-400 cursor-pointer'></i></span>
                      <span><i className='fas fa-pencil text-lg text-yellow-400 cursor-pointer'></i></span>
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
                    <td>
                      <div className='flex justify-evenly'>
                      <span><i className='fas fa-trash text-lg text-red-400 cursor-pointer'></i></span>
                      <span><i className='fas fa-pencil text-lg text-yellow-400 cursor-pointer'></i></span>
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
                    <td>
                      <div className='flex justify-evenly'>
                      <span><i className='fas fa-trash text-lg text-red-400 cursor-pointer'></i></span>
                      <span><i className='fas fa-pencil text-lg text-yellow-400 cursor-pointer'></i></span>
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
                    <td>
                      <div className='flex justify-evenly'>
                      <span><i className='fas fa-trash text-lg text-red-400 cursor-pointer'></i></span>
                      <span><i className='fas fa-pencil text-lg text-yellow-400 cursor-pointer'></i></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <EmployeesForm open={open} setOpen={setOpen}/>
    </section>
  </>
}
