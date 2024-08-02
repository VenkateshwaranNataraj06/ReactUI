import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import lumenPic from './lumenpic.png';
import logo from './logo0.png';
import bot1 from './bot1.png';
import profile from './profile.png';
import tesla from './tesla.png';
import apple from './apple.png';
import x from './x.png';
import kfatmseclog from './kfckumlogo.png';
import { Chart } from 'chart.js';
import ApexChart from './components/ApexChart';
import bot4 from './bot (4).png';
import bot2 from './bot (2).png';
import bot3 from './bot (3).png';
import nike from './nike.png';
import applehist from './applehistory.png';
import playstation from './playstation.png';
import p1hist from './p1hist.png';
import p2hist from './p2hist.png';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f5f8]">
        {/* Header and name */}
        <header className="bg-white shadow-md rounded-[30px] p-6 mt-10 mb-6 mx-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-700">
              <img src={logo} alt='logo' />
            </div>

            {/* navgationbutton */}
            <div className='flex flex-row gap-2 text-center'>

              <div><button className='font-semibold border-2 border-black bg-black py-2 px-2 text-white bg-black rounded-[30px] fonurbanist'>Dashboard</button></div>
              <div><button className='font-semibold py-2 px-2 rounded-[30px] fonurbanist'>Payments</button></div>
              <div><button className=' font-semibold py-2 px-2 rounded-[30px] fonurbanist'>Analytics</button></div>
              <div><button className='font-semibold py-2 px-2 rounded-[30px] fonurbanist'>Cards</button></div>
              <div><button className='font-semibold py-2 px-2 rounded-[30px] fonurbanist'>History</button></div>
              <div><button className='font-semibold py-2 px-2 rounded-[30px] fonurbanist'>Services</button></div>
              <div><button className='font-semibold py-2 px-2 rounded-[30px] fonurbanist'>Help</button></div>


            </div>














            <div className="text-lg text-gray-600">
              <div className='flex flex-row item-center gap-1'>
                <div>
                  <span class="material-symbols-outlined w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full ">
                    notifications
                  </span>
                </div>
                <div>
                  <span class="material-symbols-outlined w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full ">
                    settings
                  </span>
                </div>
                <div>
                  <span class=" w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full">
                    <img src={profile} alt='pro' width='50' className='rounded-full' />
                  </span>


                </div>


              </div>
            </div>
          </nav>
        </header>

        <header className="bg-[#f5f5f8]  p-6 mb-6 mx-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl flex flex-row font-bold gap-6  text-gray-700 fonurbanist">
              <span className="material-symbols-outlined rounded-full flex items-center justify-center border-gray-300 border-2 text-gray-600 text-2xl w-12 h-12">
                keyboard_backspace
              </span>
              <h1 className='flex items-center justify-center text-3xl fonurbanist text-black'>Hello, Michale</h1>
            </div>

            <div className="text-lg flex flex-row  gap-2 text-gray-600 fonurbanist">
              <div>
                <span class="material-symbols-outlined w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full ">
                  search
                </span>
              </div>
              <div>
                <span class="material-symbols-outlined w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full ">
                  instant_mix
                </span>
              </div>
              <div className='flex flex-row border-2 border-gray-300 rounded-[30px]'>

                <div className=''>
                  <span class="material-symbols-outlined w-12 h-12 flex items-center justify-center  text-gray-500 rounded-full ">
                    today
                  </span>
                </div>

                <select className='bg-[#f5f5f8] fonurbanist  text-black  rounded-[30px]'><option className='fonurbanist'>27 Jan-27 Feb 2025</option> <option className='fonurbanist'>28 Feb-28 Mar 2025</option></select>



              </div>
              <div className='border-2 flex w-48 items-center justify-center border-gray-300 rounded-[30px]'>
                <span class="material-symbols-outlined w-10 flex items-center  text-gray-500 rounded-full ">
                  add
                </span>
                <span className=' text-black fonurbanist'>Add Witdet <span className='text-white'>e</span>   </span>

              </div>



            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col gap-6 mx-4">
          <div className="flex flex-row gap-4">

            <aside className="w-96 bg-black shadow-md rounded-[30px] p-4">
              <div className="  text-gray-800">
                {/* totaldiv */}
                <div id='totalbal'>

                  <label className='fonurbanist text-white'>Total balance <span className='border-2  ml-[45%] border-black '> <span className="material-symbols-outlined border-2 rounded-full border-white text-white text-3xl w-12 h-12 text-center bg-black">north_east </span></span></label>
                  <h2 className='text-3xl fonurbanist text-white'>$6,010 <span className='text-gray-500 font-normal fonurbanist'>.29</span></h2>


                </div>
                {/* icondiv */}<br /><br />
                <div id='icondiv' className='flex gap-2 items-center justify-center'>
                  <div>
                    <span className="material-symbols-outlined text-3xl bg-gray-800 w-16 h-16 flex items-center justify-center text-white borderradius">
                      upload
                    </span>
                  </div>


                  <div>
                    <span class="material-symbols-outlined text-3xl bg-gray-800 w-16 h-16 flex items-center justify-center text-white borderradius">
                      download
                    </span>
                  </div>

                  <div>
                    <span class="material-symbols-outlined text-3xl bg-gray-800 w-16 h-16 flex items-center justify-center text-white borderradius">
                      swap_horiz
                    </span>
                  </div>

                  <div>
                    <span class="material-symbols-outlined text-3xl bg-gray-800 w-16 h-16 flex items-center justify-center text-white borderradius">
                      date_range
                    </span>
                  </div>

                </div>
                {/* Progreess */} <br /><br />
                <div className="w-full rounded-full h-8 overflow-hidden relative zebra-stripes">
                  <div
                    className="bg-[#D7FE03] h-full text-center text-white text-xs font-medium leading-none"
                    style={{ width: `${50}%` }}
                  >
                    <div className='absolute inset-0 flex items-center justify-center'>

                    </div>

                  </div>

                </div>
                <div class=" relative -top-12 border-black  ml-[45%] w-12 h-12 rounded-full text-white">
                  <span class="material-symbols-outlined text-center border-2 border-gray-200 rounded-full p-4 bg-black">
                    more_vert
                  </span>
                </div>

                <div>
                  <p className='fonurbanist rounded-[20px] text-gray-500 p-6 '> <span className='text-2xl fonurbanist text-white'> $460<span className='text-gray-500 font-normal fonurbanist'>.00</span> </span>  This  is  $150000  less </p>
                </div>
                {/* bottondiv */}


                <div className='flex flex-col gap-2 '>

                  <div className="flex items-center  space-x-4  p-4 rounded-[20px] bg-[#1A1A1A]">
                    {/* Icon */}

                    <span class="material-symbols-outlined bg-[#363636] w-12 h-12 flex items-center justify-center text-white border-2 border-gray-600 rounded-full text-2xl font-normal">
                      attach_money
                    </span>

                    {/* Text */}
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-lg  font-semibold fonurbanist text-white fonurbanist">$4,360<span className='text-gray-500 font-normal fonurbanist'>.00</span></span>

                      <div className="flex ml-[50%]">
                        <span className="text-sm text-gray-500 fonurbanist   flex items-center">
                          <span className="material-symbols-outlined text-[#3F6E30] mr-1">north_east</span>
                          19%
                        </span>
                      </div>
                    </div>

                  </div>


                  <div className="flex items-center space-x-4 p-4 rounded-[20px] bg-[#1A1A1A]">
                    {/* Icon */}

                    <span class="material-symbols-outlined bg-[#363636] w-12 h-12 flex items-center justify-center text-white border-2 border-gray-600 rounded-full text-2xl font-normal">
                      euro_symbol
                    </span>
                    {/* Text */}
                    <div className="flex flex-row items-center justify-between">
                      <span className="text-lg font-semibold fonurbanist text-white">$1,020<span className='text-gray-500 font-normal fonurbanist'>.00</span></span>

                      <div className="flex ml-[50%]">
                        <span className="text-sm text-gray-500 flex items-center fonurbanist">
                          <span className="material-symbols-outlined mr-1 text-[#3F6E30]">north_east</span>
                          0.4%
                        </span>
                      </div>
                    </div>
                  </div>



                  <div className=' w-full rounded-[20px] bg-[#1A1A1A]'>
                    <img src={bot1} alt='lumenpi' width={500} className='rounded-[20px]' />

                  </div>

                </div>



              </div>
            </aside>

            {/* ..................  sidebar complete........... */}

            <section className="flex bg-[#f5f5f8] w-full p-4 flex flex-row gap-4 ">


              <div className="flex flex-col gap-4">


                <div className="flex flex-row gap-4">

                  <div className="bg-white shadow-md rounded-[30px] p-4 w-full  flex-1">
                    {/* investment */}
                    <div className='flex flex-row items-center justify-between p-4'>
                      <label className='fonurbanist text-2xl'>
                        Investments
                      </label>
                      <span >
                        <span className="material-symbols-outlined border-2 rounded-full border-gray-300 text-gray-500 text-3xl w-12 h-12 text-center bg-white">
                          north_east
                        </span>
                      </span>
                    </div>


                    <div className="flex flex-row gap-4 mt-4">
                      <div className="flex flex-col  items-center flex-1">
                        <div className=' w-64 h-32  p-2 flex items-center justify-centert rounded-[30px] bg-black'>
                          <span className=" w-12 h-12 flex items-center justify-center text-white  text-3xl mr-2">
                            <img src={tesla} alt='tesla' className="w-12 h-12 rounded-full" />
                          </span>
                          <div className="flex flex-col justify-center flex-grow">
                            <span className="text-lg font-semibold fonurbanist text-white fonurbanist">Tesla</span>
                            <span className="text-gray-500 fonurbanist">2.3221</span>
                          </div>
                          <div className="text-sm text-gray-500 flex flex-col justify-center">
                            <div className="flex items-center mb-1 text-[#D7FE03] font-semibold fonurbanist">
                          
                              +4.21%
                            </div>
                            <span className='fonurbanist'>per month</span>
                          </div>
                        </div>






                        <div className=' w-64 h-32 p-2 mt-[-10%] flex bg-[#D7FE03] items-center justify-center rounded-[30px]'>
                          <span className="w-12 h-12 flex items-center justify-center text-white text-3xl mr-2">
                            <img src={x} alt='tesla' className="w-12 h-12 rounded-full" />
                          </span>
                          <div className="flex flex-col justify-center flex-grow">
                            <span className="text-lg font-semibold fonurbanist text-black fonurbanist">X</span>
                            <span className="text-gray-500 fonurbanist">1.3442</span>
                          </div>
                          <div className="text-sm text-gray-500 flex flex-col justify-center">
                            <div className="flex items-center text-black mb-1 font-semibold fonurbanist">
                           
                              -1.02%
                            </div>
                            <span className='fonurbanist'>per month</span>
                          </div>
                        </div>

                        <div className=' w-64 h-32 p-2 mt-[-10%] bg-white flex items-center justify-center rounded-[30px]'>
                          <span className=" w-12 h-12 flex items-center justify-center text-white  text-3xl mr-2">
                            <img src={apple} alt='tesla' className="w-12 h-12 rounded-full" />
                          </span>
                          <div className="flex flex-col justify-center flex-grow">
                            <span className="text-lg font-semibold fonurbanist text-black">Apple</span>
                            <span className="text-gray-500 fonurbanist">0.6743</span>
                          </div>
                          <div className="text-sm text-gray-500 flex flex-col justify-center">
                            <div className="flex items-center text-black font-semibold mb-1 fonurbanist">
                               -0.56%
                            </div>
                            <span className='fonurbanist'>per month</span>
                          </div>


                        </div>
                      </div>

                    </div>

                  </div>
                  {/* 
                <!-- Second container --> */}
                  <div className='flex flex-col gap-2'>

                    <div className=' bg-white p-2 rounded-[30px] '>
                      <div className='flex flex-row items-center justify-between p-4 '>
                        <label className='fonurbanist text-black text-lg'>
                          ATMs on the map <br /> <span className='text-gray-500 fonurbanist' >we found 32 ATM</span>
                        </label>
                        <span className='flex-shrink-0'>
                          <span className="material-symbols-outlined border-2 rounded-full border-gray-300 text-gray-500 text-3xl w-12 h-12 text-center ">
                            north_east
                          </span>
                        </span>
                      </div>
                      <div className=' w-full '></div>
                      <span className="material-symbols-outlined p-2 text-black h-10 w-10 text-2xl bg-[#D7FE03] ml-[50%] rounded-full ">
                        location_on
                      </span>
                      <div className="w-full max-w-md  mb-4 mx-auto p-4 border h-16 border-gray-300 rounded-lg shadow-md bg-zebra p-4 flex flex-col items-center ">


                      </div>
                    </div>

                    <div className='flex flex-col gap-2'>

                      <div className=' p-2 bg-white rounded-[30px]'>
                        <div className='flex flex-row items-center justify-between p-4 '>
                          <label className='fonurbanist text-black font-semibold text-lg'>
                            Cashback <span className='text-white'> and bonuses</span>
                          </label>
                          <span className='flex-shrink-0'>
                            <span className="material-symbols-outlined border-2 ml-4 rounded-full border-gray-300 text-gray-500 text-3xl w-12 h-12 text-center">
                              north_east
                            </span>
                          </span>
                        </div>
                        <div className='flex justify-center items-center h-28 mt-10 rounded-[20px] border-2 border-gray-100'>
                          <img src={kfatmseclog} alt='kfclogo' />
                          

                        </div>

                        <div className=' w-full h-16'></div>

                      </div>
                      {/* <div className='border-2 border-red-600 w-64 h-16 flex items-center justify-center'>
                       
                      </div> */}
                      {/* <div className='border-2 border-red-600 w-64 h-14 flex items-center justify-center'>
                       
                      </div> */}
                    </div>
                  </div>
                </div>


                {/* <!-- Container below the two side-by-side containers --> */}
                <div className="bg-white shadow-md rounded-[30px] p-4  ">


                  <div className="flex justify-between items-center rounded-[20px]">

                    <div className="text-center font-semibold text-gray-800">
                      <p className='fonurbanist font-semibold text-2xl'>Your Expenses this Year</p>
                    </div>


                    <div className="flex items-center">
                      <span className="material-symbols-outlined border-2 ml-4 rounded-full border-gray-300 text-gray-500 text-3xl w-12 h-12 text-center ">
                        north_east
                      </span>
                      <span className="material-symbols-outlined w-12 h-12 flex items-center justify-center border-2 border-gray-300 text-gray-500 rounded-full ml-4">
                        instant_mix
                      </span>
                    </div>
                  </div>

                  <ApexChart />

                </div>
              </div>



            </section>

            <aside className=" bg-[#f5f5f8]   p-4 w-full">


              <div className="text-center font-semibold text-gray-800 w-full">


                <section className="flex-1  flex flex-col gap-2">

              

                    <div className="flex flex-col gap-4">
                      <div className="bg-white shadow-md rounded-[30px] p-4  flex gap-2 flex-row items-center justify-center">
                        <div className=' rounded-[30px] '>
                          <img src={bot4} alt='bot4' width='500' />
                        </div>
                        <div className='  rounded-[30px]'>
                          <img src={bot3} alt='bot4' width='520' />
                        </div>
                        <div className='  rounded-[30px]'>
                          <img src={bot2} alt='bot4' width='500' />
                        </div>
                      </div>
                    </div>
                 

                  <div className="bg-white shadow-md rounded-[30px] p-4">
                    <div>
                      <div className='flex flex-row items-center justify-between  '>
                      <label className='fonurbanist text-xl font-semibold'>
                        History
                      </label>
                      <span >
                        <span className="material-symbols-outlined border-2 rounded-full border-gray-300 text-gray-500 text-3xl w-12 h-12 text-center ">
                          north_east
                        </span>
                      </span>
                    </div>
                    </div>

                    <ul className="flex flex-col gap-4">
                      <br/>
                      <p className='text-start fonurbanist text-gray-500 '>Today,20 March</p>
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "><img src={nike} alt='nikelogo' width='50px' /></span>
                        <span className="ml-2 font-semibold text-gray-800 fonurbanist">Nike Store<br/><span className='block text-left text-gray-500 font-normal fonurbanist'>Purchase</span> </span>
                        <span className="ml-auto font-semibold fonurbanist">-$45.90 <br/><span className='font-normal text-sm fonurbanist'>11.30AM</span> </span>
                      </li>
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "><img src={apple} alt='nikelogo' width='50px' className='rounded-full'/></span>
                        <span className="ml-2 font-semibold text-gray-800 fonurbanist">Apple Store<br/><span  className='block text-left text-gray-500 font-normal fonurbanist'>Purchase</span> </span>
                        <span className="ml-auto font-semibold fonurbanist">-$112.00 <br/><span className='font-normal text-sm fonurbanist'>10.12AM</span> </span>
                      </li>
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "><img src={playstation} alt='nikelogo' width='50px' /></span>
                        <span className="ml-2 font-semibold text-gray-800 fonurbanist">PlayStation Network <br/><span  className='block text-left text-gray-500 font-normal fonurbanist'>Purchase</span> </span>
                        <span className="ml-auto font-semibold fonurbanist">-$28.60 <br/><span className='font-normal text-sm fonurbanist'>6.34PM</span> </span>
                      </li>
                    </ul>


                    <ul className="flex flex-col gap-4">
                      <br/>
                      <p className='text-start fonurbanist text-gray-500'>Yesterday,19 March</p>
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "><img src={p1hist} alt='nikelogo' width='70px' className='rounded-full'/></span>
                        <span className="ml-2 font-semibold text-gray-800 text-left fonurbanist">Robert Fox<br/><span  className='block text-left text-gray-500 font-normal fonurbanist' >Replenishment</span> </span>
                        <span className="ml-auto text-[#8BD672] fonurbanist" >+$280.00 <br/><span className='font-normal text-sm text-gray-500 fonurbanist'>8.10PM</span> </span>
                      </li>
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "><img src={p1hist} alt='nikelogo' width='70px' className='rounded-full' /></span>
                        <span className="ml-2 font-semibold text-gray-800 fonurbanist">Kathryn Murphy<br/><span  className='block text-left text-gray-500 font-normal fonurbanist'>Replenishment</span> </span>
                        <span className="ml-auto text-[#8BD672] fonurbanist">+$400.00 <br/><span className='font-normal text-sm  text-gray-500 fonurbanist'>4.45AM</span> </span>
                      </li>
                      
                     
                    </ul>
{/* for matching with center div heigth empty created start*/}
                    <ul className="flex flex-col gap-4 bg-white">
                      <br/>
                      <p className='text-start fonurbanist text-white '>Yesterday,19 March</p>
                     
                      <li className="flex items-center  ">
                        <span className="text-gray-800 "></span>
                        <span className="ml-2 font-semibold text-white fonurbanist">Kathryn Murphy<br/><span  className='block text-left text-gray-500 font-normal  text-white fonurbanist'>Replenishment</span> </span>
                        <span className="ml-auto  text-white fonurbanist">+$400.00 <br/><span className='font-normal text-sm  text-white fonurbanist'>4.45AM</span> </span>
                      </li>
                     
                    </ul>
                    <ul className="flex flex-col gap-4 bg-white">
                      <br/>
                 
                     
                      <li className="flex items-center  ">
                     
                        <span  className='block text-left text-gray-500 font-normal  text-white'>Replenishment</span> 
                        
                      </li>
                     
                    </ul>

{/* for matching with center div heigth empty created  end*/}


                  </div>

                </section>


              </div>
            </aside>
          </div>
        </main>
      </div >
    </Router >
  );
}

export default App;
