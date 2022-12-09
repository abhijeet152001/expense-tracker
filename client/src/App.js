// import './App.css';

import { useState } from "react";

function App() {
 const [form, setForm] =  useState({
  number : 0,
  description : "",
  date: "", 
 })

function handleInput(e){
// console.log(e.target.name)
setForm({...form, [e.target.name]:e.target.value})
}

async function handleSubmit(e){
e.preventDefault();
const res = await fetch("http://localhost:4000/transaction", {
  method : "POST",
  body: form
});
// console.log(form);
}
 
  return (
   <div onSubmit={handleSubmit}> 
   <form >
    <input 
    type="number" 
    name = "number"
    onChange={handleInput} 
    value = {form.number} 
    placeholder="Enter Transaction amount" />
    <input type="text" name = "description"
    onChange={handleInput} 
    value = {form.description}  placeholder="Enter Transaction Details" />
    <input type="date" name = "date"
    onChange={handleInput} 
    value = {form.date}  placeholder="Enter Transaction amount" />
    <button type='submit'>Submit</button>
   </form>
    </div>
  );
}

export default App;
