


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../Redux/profileSlice'
function Myprofile() {
  const mydata=useSelector((state)=>state.profile.user)
     console.log(mydata)
  return (
    <div>
      <div>
        <h1>{mydata.username}</h1>
        <h1>{mydata.email</h1>

      </div>
    </div>
  )
}

export default Myprofile









