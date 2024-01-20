import React, { useState } from "react";

function Home() {
  const [productname, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [state, setState] = useState("");


  return (
    <div>
      <h1 className="text-center mt-5 text-2xl font-bold">ToDo App</h1>

      <div className="flex justify-evenly mt-5 bg-slate-400 h-96 p-4">
        <div className="bg-white px-40">
          <div className="text-center mt-3 text-2xl font-bold">ADD Data ➕ </div>

          <input
            type="text"
            placeholder="Enter Product Name here"
            className="border w-full mt-4 px-4"
            value={productname}
            onChange={(e)=>{
              setProductName(e.target.value);

            }}       
            />
            
  
          <input
            type="text"
            placeholder="Enter Product Price here"
            className="border w-full mt-4 px-4"
            value={productPrice}
            onChange={(e)=>{
              setProductPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter State here"
            className="border w-full mt-4 px-4"
            value={state}
            onChange={(e)=>{
              setState(e.target.value);
            }}
          />
          
          <button 
          type="button" 
          className="bg-black text-white px-10 mt-5 rounded-sm"
          // onClick={addData()}
          > Add </button>
        </div>

        <div className="bg-white px-4 ms-2">
          <div className="">See Data 😎</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus quia nobis corporis nisi, repellendus quas quaerat sit asperiores voluptatibus in? Praesentium magnam aperiam eos, ipsam ipsa velit placeat nihil
        </div>
      </div>
    </div>
  );
}

export default Home;
