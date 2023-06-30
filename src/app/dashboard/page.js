import React from 'react'
import {CiSettings, CiFloppyDisk} from 'react-icons/ci'
import {AiOutlinePlus , AiOutlineShop} from 'react-icons/ai'
import {BsBag,BsListNested} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
import Flags from 'country-flag-icons/react/3x2'

export default function Dashboard() {
  return (
    <div>
      <nav className="bg-white border-gray-200 lg:ml-64 dark:bg-gray-300">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-300 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-black text-xl font-bold bg-gray-400 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Add new post</a>
        </li>
        <li className="flex">
    {<CiSettings size={24} />}
    <a
      href="#"
      className="ml-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    >
      Add content
    </a>
  </li>
  <li className="flex">
    {<AiOutlinePlus size={24} />}
    <a
      href="#"
      className="ml-2 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    >
      Settings
    </a>
  </li>
      </ul>
    </div>
  </div>
</nav>
    <div className="p-4 sm:ml-64 ">
      <div className="p-4   rounded-lg  mt-14">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-100 dark:bg-gray-100">
                {<BsBag size={48} fill="#FFA500"/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Total Sales<br/><span className='text-2xl  font-bold'>2,456</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<AiOutlineShop size={48} fill='#6A0DAD'/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Total Expenses<br/><span className='text-2xl  font-bold'>3,236</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<GoPeople size={48} fill='#1aa260 '/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Total Visitors<br/><span className='text-2xl  font-bold'>5,280</span></p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-100">
                {<BsListNested size={48} fill='#8808bf'/>}
                <p className="ml-2 text-sm text-gray-400 dark:text-gray-500">Total Orders<br/><span className='text-2xl  font-bold'>1,000</span></p>
               
            </div>
          </div>
          <div className='pt-16'>
            <p className='text-2xl text-black text-align-left align-content-left'>Form Title</p>
            <p className='text-base text-gray500 text-alig-left'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-red-100 dark:text-red-400 dark:border-red-800" role="alert">
              <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Danger alert!</span> some random text written here 
              </div>
          </div>
          </div>
          <div className="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-100">
            {/* <p className="text-2xl text-gray-400 dark:text-gray-500">+</p> */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Table title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Table title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Table title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Table title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Table title
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900 flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-300 dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900 flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-300 dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-900">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-gray-900 flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-300 dark:border-gray-400">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                          lorem ipsum
                      </th>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black">
                          lorem ipsum
                      </td>
                      <td className="px-6 py-4 text-black flex">
                          {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex">{<CiFloppyDisk size={24}/>}Edit</button>
                          <button type="button" className="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900 flex">{<CiFloppyDisk size={24}/>}Delete</button>
                      </td>
                  </tr>
                  
              </tbody>
          </table>
          </div>
          </div>
      
          <div className='w-full'> 
          <div className="flex  h-48 mb-4 rounded align-content-left justify-content-left bg-gray-50 dark:bg-gray-50 mt-16">
              <p className="text-2xl text-gray-400 dark:text-black font-bold ml-4">Form Title <br/> 
              <span className="text-base text-gray-400 dark:text-black font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit..</span>
              <br/>
              <button type="button" className="mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-red dark:hover:bg-yellow-100 ">

                {<Flags.GB size='2px' title="United States" className="..."/>}
                English
              </button>
              <button type="button" className="mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-yellow-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-white dark:text-black dark:border-gray-600 dark:hover:text-red dark:hover:bg-yellow-100">
                <Flags.TR title="turkey" className="..."/>
                Turkish
                </button>
              </p>
            </div>
            <form >
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
            <div className=" items-center justify-center rounded ">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              <select id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name="chose">
              
              <option>chose</option>
              <option>op2</option>
              <option>op3</option>
              </select>
                
            </div>
            <div className=" items-center justify-center rounded ">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>
            <div className=" items-center justify-center rounded ">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
            
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className=" items-center justify-center rounded ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
              </div>
              <div className=" items-center justify-center rounded ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
              </div>
            </div>
            <div className=" items-center justify-center rounded mb-6 ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              
                <textarea type="text" id="email" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>
          </form>



          </div>
          <div className="grid grid-cols-3 gap-4">

            <div className="col-span-2 mb-4 rounded align-content-left justify-content-left bg-gray-50 dark:bg-gray-50 mt-16">
            <div className="flex mb-4  rounded align-content-left justify-content-left bg-gray-50 dark:bg-gray-50 ">
              <p className="text-2xl text-gray-400 dark:text-black font-bold ml-4">Form Title <br/> 
              <span className="text-base text-gray-400 dark:text-black font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit..</span>
              <br/>
              </p>
            </div>
    
            <form >
            <div className="mb-6 p-2.5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>

            <div className=" items-center justify-center rounded mb-6 p-2.5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              <select id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name="chose">
              
              <option>chose</option>
              <option>op2</option>
              <option>op3</option>
              </select>
                
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 p-2.5">
              <div className=" items-center justify-center rounded ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
              </div>
              <div className=" items-center justify-center rounded ">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
              
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
              </div>
            </div>
            <div className=" items-center justify-center rounded mb-6 p-2.5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
                  
                    <textarea type="text" id="email" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
            </div>

            </form>



            </div>
            <div className=" mb-4 rounded align-content-left justify-content-left bg-gray-50 dark:bg-gray-50 mt-16">
              <div className="flex mb-4  rounded align-content-left justify-content-left bg-gray-50 dark:bg-gray-50 ">
                <p className="text-2xl  text-gray-400 dark:text-black font-bold ml-4">Form Title <br/> 
                <br/>
                </p>
              </div>

              <form >
                <div className="mb-6 p-2.5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
                  <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
                </div>

                <div className=" items-center justify-center rounded mb-6 p-2.5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
                  <select id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" name="chose">
                  
                  <option>chose</option>
                  <option>op2</option>
                  <option>op3</option>
                  </select>
                    
                </div>
                <div className=" items-center justify-center rounded mb-6 p-2.5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Label title</label>
                  
                    <textarea type="text" id="email" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="placeholder content"/>
                </div>
            </form>
            <div className=" items-center justify-center rounded  p-2.5">

            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full p-2.5">Button</button>
            </div>
            </div>
          </div>
      </div>
    </div>

    </div>
  )
}

