"use client"
import Menu from '@/components/Menu';
//import Menu from '@/components/Menu';
import React from 'react';
const productsUrl = "https://dummyjson.com/products";

const getProducts = async ()=> {
    const res = await fetch(productsUrl)
    const products = await res.json()
    return products["products"];
}

const page = async () => {
    const data = await getProducts()
   /// console.log('data',data);

    return (
      <div className="container mx-auto">
       <Menu />
        <h1 className="text-4xl ">Products Server Side Rendering</h1>
        <div className="p-4">
          <button
            className="bg-rose-400 p-4 text-white font-bold rounded-lg"
            onClick={() => {
              alert("Hello world");
            }}
          >
            Click
          </button>
        </div>
        <div className="mt-4">
          {data.slice(0, 5).map((item, index) => {
            return (
              <div key={index}>
                <span className="font-bold mr-1">{index + 1}. </span>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default page;