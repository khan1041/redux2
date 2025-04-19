
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  return (
    <div>
      <div>
        <nav className='bg-green-300 w-[90px] h-[800px] fixed '>
            <div>
                <h1 className='text-blue-500 text-2xl'>LOGO</h1>
            </div>
            <div className='flex flex-col mt-5'>
                  <Link className=' mt-14 text-[17px]'><ul>HOME </ul></Link>
                  <Link className='mt-14 text-[17px]'><ul>POST</ul></Link>
                  <Link className='mt-14 text-[17px]'><ul>SETTING</ul></Link>
                  <Link className='mt-14 text-[17px]'><ul>SAVE</ul></Link>
                  <Link className='mt-14 text-[17px]'><ul>PROFILE</ul></Link>
                  <Link className='mt-14 text-[17px]'><ul>LOGOUT</ul></Link>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
