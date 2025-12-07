import React from 'react'
import style from './RecentTrips.module.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Legend, Tooltip, Chart as ChartJS } from 'chart.js';

export default function RecentTrips() {

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [15, 19, 3, 5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '85%', // inner hole size (controls donut thickness)
    radius: '75%', // overall chart radius
    maintainAspectRatio: true,
    plugins: { legend: { display: false } },
  };

  return <>
    <section className='pt-15'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* First Section */}
          <div className="w-8/12 pr-5">
            <div className="trips bg-white rounded-sm shadow">
              {/* Title */}
              <div className="title p-5">
                <h2 className='text-gray-600 text-xl'>Recent Trips</h2>
              </div>

              {/* Table */}

              <table className='w-full border border-gray-200 text-sm text-center'>
                <thead className='bg-gray-100 text-gray-700'>
                  <tr>
                    <th className='p-5'>No.</th>
                    <th className='p-5'>Image</th>
                    <th className='p-5'>Trip Id</th>
                    <th className='p-5'>Price</th>
                    <th className='p-5'>Trip Time</th>
                    <th className='p-5'>Customer</th>
                    <th className='p-5'>Status</th>
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
                    <td>50 EGP</td>
                    <td>
                      <div className="flex flex-col">
                        <p>22-10-2026</p>
                        <p>12:00 pm</p>
                      </div>
                    </td>
                    <td>Hassan Waleed</td>
                    <td>
                      <div className="status flex justify-evenly items-center w-11/12">
                        <div className="icon w-[10px] h-[10px] bg-blue-600 rounded-full">
                        </div>
                        <p>In Progress</p>
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
                    <td>150 EGP</td>
                    <td>
                      <div className="flex flex-col">
                        <p>22-10-2026</p>
                        <p>12:00 pm</p>
                      </div>
                    </td>
                    <td>Youssef Anas</td>
                    <td>
                      <div className="status flex justify-evenly items-center w-11/12">
                        <div className="icon w-[10px] h-[10px] bg-green-600 rounded-full">
                        </div>
                        <p>Finished</p>
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
                    <td>50 EGP</td>
                    <td>
                      <div className="flex flex-col">
                        <p>22-10-2026</p>
                        <p>12:00 pm</p>
                      </div>
                    </td>
                    <td>Hassan Waleed</td>
                    <td>
                      <div className="status flex justify-evenly items-center w-11/12">
                        <div className="icon w-[10px] h-[10px] bg-red-600 rounded-full">
                        </div>
                        <p>Declined</p>
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
                    <td>50 EGP</td>
                    <td>
                      <div className="flex flex-col">
                        <p>22-10-2026</p>
                        <p>12:00 pm</p>
                      </div>
                    </td>
                    <td>Hassan Waleed</td>
                    <td>
                      <div className="status flex justify-evenly items-center w-11/12">
                        <div className="icon w-[10px] h-[10px] bg-blue-600 rounded-full">
                        </div>
                        <p>In Progress</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="details flex justify-end py-5 px-3">
                <p className='border border-gray-300 rounded-md text-gray-500 px-10 py-2 transition-all duration-150 cursor-pointer hover:bg-gray-200 hover:text-slate-700'>Details</p>
              </div>

              

            </div>
          </div>

          {/* Second Section (Analysis) */}
          <div className="w-4/12">

            <div className="analysis bg-white rounded-sm shadow">

              {/* Title */}

              <div className="title border-b border-gray-200 p-3">
                <h2 className='text-gray-500 text-2xl'>Trips Rate</h2>
              </div>

              {/* Chart */}

              <div className="info w-2/3 mx-auto">
                <Doughnut
                  data={data}
                  options={options}
                />
              </div>

              {/* Documenation for colors */}

              <div className="flex flex-wrap w-full px-5 py-2">
                <div className="w-3/12">
                  <div className="content w-11/12 bg-[#FFF3D6] flex justify-center py-2 rounded-md">
                    <p>Yemen</p>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="content w-11/12 bg-[#CDEBFF] flex justify-center py-2 rounded-md">
                    <p>Jordon</p> 
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="content w-11/12 bg-[#E6D9FF] flex justify-center py-2 rounded-md">
                    <p>Syria</p>
                  </div>
                </div>
                <div className="w-3/12">
                  <div className="content w-11/12 bg-[#D3F5F5] flex justify-center py-2 rounded-md">
                    <p>KSA</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
