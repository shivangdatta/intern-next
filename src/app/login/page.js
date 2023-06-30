import React from 'react'
import img1 from 'src/assets/img1.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Loginpage() {
  return (
    <div className='flex items-center justify-center sm:ml-0 lg:ml-64 lg:mt-4 md:auto'>
    <div className="max-w-sm w-full lg:max-w-full lg:flex lg:ml-24 ">
    <div className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
      <Image src={img1}
        height={700}
        priority={true}
        alt="some image here"
       />
    </div>
    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login
          </h2>
          <p className="mt-1 text-left text-l  leading-9 tracking-tight text-gray-900">
            Lorem ipsum dolor, sit amet consectetur.
          </p>

        </div>

        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm leading-6 text-gray-900">
                E-mail 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='&nbsp;Placeholder content'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder='&nbsp; Placeholder content'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
              </div>
            </div>
            <div className='text-right leading-3'>
              <a href="#" className="text-xs font-semibold text-gray-600 hover:text-gray-500">
                Forgot password?
              </a>
            </div>
            <div>
              <Link href='/dashboard'>
              <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
              </Link>
            </div>
          </form>
          <p className="overflow-hidden text-xs text-center text-gray-300 mt-8">
            <span className="bg-gray-200 inline-block h-px relative align-middle w-5/12"> </span>
            &nbsp; or &nbsp;
            <span className="bg-gray-200 inline-block h-px relative align-middle w-5/12"></span>
          </p>
          <button className="bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-full mt-3 text-sm">
            Register Now
          </button>
        </div>
      </div>
      </div>
    </div>    
    </div>    
  )
}
