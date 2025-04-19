


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from 'react-router-dom'
import { allpost } from '../Redux/AllPostSlice'
import Home from '../Page/Allpost'
import Allpost from '../Page/Allpost'
import GetSuggested from './GetSuggested'
function GetAllpost() {

  //get all post
 const dispatch=useDispatch()
 
 const posts=useSelector((state)=>state.getallpost.allpostdata)
 console.log(posts)


  const allpostdata=async()=>{

    try {
      const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/getAllpost`,{
        method:"get"
      })
      if(response.ok){
        const data=await response.json()
       const result=  dispatch(allpost(data))

        console.log(result)
      }
    } catch (error) {
      console.log(error)
    }

  }

useEffect(()=>{
  allpostdata()
},[])
  return (
    <div>
      
      <div>
              {posts.map((post)=><Allpost key={post._id} post={post}/>)}

      </div>
      <div>
        <GetSuggested/>
      </div>
       
    </div>
  )
}

export default GetAllpost







