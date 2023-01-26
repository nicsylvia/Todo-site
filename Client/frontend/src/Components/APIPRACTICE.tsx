import React from 'react'
import axois from "axios"
import axios from 'axios'


interface props {
    id : string , 
    title : string,
    price : string,
    image : string,
    rating: {}
}
const APIPRACTICE = () => {
    const [data , setData] = React.useState<props[]>([])
    const consumeApi = async () =>{
        await axios.get("https://fakestoreapi.com/products?limit=10").then((res)=>{
            setData(res.data.data)
        })
    }

    React.useEffect(()=>{
        consumeApi()
    })
  return (
 <div>
    {
        data.map((props) =>(
            <div key={props.id}>
            <h1>title : {props.title} </h1>
            <p>price :{props.price}</p>
            <img src={props.image} alt="" />
         
                </div>
        ))
    }
 </div>
  )
}

export default APIPRACTICE