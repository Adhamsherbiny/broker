'use client'
import { useState } from "react"
import "./createposts.css"
import axios from "axios"
export default function CreatePost() {
  const [pic , setPic] = useState<any>()
  const [type , setType] = useState<any>()
  const [price , setPrice] = useState<any>()
  const [phone , setPhone] = useState<any>()
  const [adress , setAdress] = useState<any>()
  const [rooms , setRooms] = useState<any>()
  const [bathrooms , setBathrooms] = useState<any>()

   function addpost (e: { preventDefault: () => void }){
    e.preventDefault()
    axios.post("http://localhost:5000/createpost" , {pic , type , price , phone , adress , rooms , bathrooms})
    .then((response)=>(console.log(response.data)))
    .catch((err)=>(console.log(err)))
   }
  return (
    <div className="postDefinition">
      <form action="">
        <div className="pics">
          <div className="f-d">
            <label htmlFor="">Picture</label>
            <input type="file" accept="image/*" onChange={(e)=>{setPic(e.target.value)}} />
          </div>
        </div>
        <div className="inputs">
          <div className="f-d">
            <label htmlFor="type">Type</label>
            <select id="type" onChange={(e)=>{setType(e.target.value)}}>
              <option value="Sell">Sell</option>
              <option value="Rent">Rent</option>
            </select>
          </div>
          <div className="f-d">
            <label htmlFor="">Price</label>
            <input type="text" onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
          <div className="f-d">
            <label htmlFor="">Phone</label>
            <input type="text" onChange={(e)=>{setPhone(e.target.value)}} />
          </div>
          <div className="f-d">
            <label htmlFor="">Adress</label>
            <input type="text" onChange={(e)=>{setAdress(e.target.value)}} />
          </div>
          <div className="f-d">
            <label htmlFor="">Rooms</label>
            <input type="number" onChange={(e)=>{setRooms(e.target.value)}} />
          </div>
          <div className="f-d">
            <label htmlFor="">Bathrooms</label>
            <input type="number" onChange={(e)=>{setBathrooms(e.target.value)}} />
          </div>
          <input type="submit" className="action-post" value="Post" onClick={addpost} />
        </div>
        
      </form>
    </div>
  )
}
