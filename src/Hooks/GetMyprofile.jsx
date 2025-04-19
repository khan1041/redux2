



import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../Redux/profileSlice'
function GetMyprofile() {
      const disPatch=useDispatch()
      const token=useSelector((state)=>state.token.tokens)
     console.log(token)
       const togole=useSelector((state)=>state.token.value)
      console.log(togole)
     const mydata=useSelector((state)=>state.profile.user)
     console.log(mydata)
        
const profile=async()=>{
    try {
        const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/profile`,{
       
            method:"get",
            headers:{
                Authorization:`Bearer${token}`

            }

        })
if(response.ok){

    const data= await response.json()
   
     disPatch(setUser(data))

}

    } catch (error) {     
        console.log(error)
    }}

    useEffect(()=>{

     profile()
    },[])

  return (
    <div>
      <div>
     
      </div>
    </div>
  )
}

export default GetMyprofile









