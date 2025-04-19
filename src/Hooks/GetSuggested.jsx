
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function GetSuggested() {

  const token=useSelector((state)=>state.token.tokens)
     console.log(token)

     const[suggestedData,setsuggestedData]=useState([])

 const suggesteruser=async()=>{

  try {

    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/suggested`,{
      method:"get",
      headers:{
        Authorization:`Bearer${token}`
  } })
  if(response.ok){
    const data=await response.json()
    setsuggestedData(data)
    console.log(data)
  }
    
  } catch (error) {
    console.log(error)
  }}

  useEffect(()=>{

    suggesteruser()
  })

  return (
    <div>
      
      <div>
        {suggestedData.map((item)=>{

         return(
          <div>
            <h1>{item.username}</h1>
          </div>
         )

        })}
      </div>
    </div>
  )
}

export default GetSuggested
