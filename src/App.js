import {useState} from "react"

export default function App(){
  const mydata = [
    {
      "first_name": "Rehant",
      "last_name": "Thapa"
    },
    {
      "first_name": "John",
      "last_name": "Doe"
    },
    {
      "first_name": "Alice",
      "last_name": "Johnson"
    },
    {
      "first_name": "Michael",
      "last_name": "Smith"
    },
    {
      "first_name": "Emilia",
      "last_name": "Davis" // Changed from "Emily" to "Emilia"
    },
    {
      "first_name": "Sara",
      "last_name": "Wilson" // Changed from "Sarah" to "Sara"
    },
    {
      "first_name": "Dave",
      "last_name": "Brown" // Changed from "David" to "Dave"
    },
    {
      "first_name": "Oliver",
      "last_name": "Martinez" // Changed from "Olivia" to "Oliver"
    },
    {
      "first_name": "Danielle",
      "last_name": "Garcia" // Changed from "Daniel" to "Danielle"
    },
    {
      "first_name": "Sophie",
      "last_name": "Miller" // Changed from "Sophia" to "Sophie"
    }
  ];
  const [searchterm,funct] = useState("");





  function handleChange(event){
    console.log(event.target.value);
funct(event.target.value);
  }
 return(
 
   <div>


       <input onChange = {handleChange}   placeholder = "search...">
   </input>

{mydata.filter((mydata)=>{
  if(searchterm === ""){
    return mydata
  }else{
    return mydata.first_name.toLowerCase().includes(searchterm.toLowerCase())
  }
}).map((x,index)=>{
  return<div className = "user" key = {index}>
     <p>{x.first_name}</p>
     </div>
})}
     </div>
 ) 
}