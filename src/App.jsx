import React from "react";
import Body from "../components/body";
import Header from "../components/header";
import data from "./data"

export default function App(){

  const cards = data.map((item)=>{
    return(
      <Body 
        key={item.id}
            {...item}/>
    )
  })


  return(
    <>
      <Header/>
      <div className="body">
      {cards}
      </div>
    </>
  )
}