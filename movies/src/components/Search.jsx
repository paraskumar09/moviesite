import React from 'react'
import { useGlobal } from './Context'

const Search = () => {

    const {query,setQuery,isError}=useGlobal();
    console.log(isError.show)
  return <>
    <div className=" text-center text-black/50 text-bold text-2xl py-6 ">
        Movies.com
    </div>
    <div className="flex justify-center mb-10">
        <div className="  w-96 flex bg-black/80   text-white  border-gray-400 rounded-lg outline-none border border-solid p-2 ">
          <input
            className=" w-full bg-transparent outline-none mr-2"
            type="text"
            placeholder="What are you looking for?"
            onChange={(e)=>setQuery(e.target.value.length>0?e.target.value:"game")}
          />
        </div>
    </div>
  </>
}

export default Search