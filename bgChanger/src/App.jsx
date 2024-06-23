import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className=' fixed w-full h-full duration-200 '
    style={{backgroundColor: color}}
    >
      
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl '>
          <button
          onClick={()=> setColor("red")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick={()=> setColor("green")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"green"}}
          >Green</button>
          <button
           onClick={()=> setColor("blue")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"blue"}}
          >Blue</button>
          <button
           onClick={()=> setColor("olive")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"olive"}}
          >Olive</button>
          <button
           onClick={()=> setColor("gray")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"gray"}}
          >Gray</button>
          <button
           onClick={()=> setColor("yellow")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button
           onClick={()=> setColor("pink")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"pink"}}
          >Pink</button>
          <button
           onClick={()=> setColor("purple")}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
           style={{backgroundColor:"purple"}}
          >Purpule</button>
          <button
           onClick={()=> setColor("white")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"white"}}
          >White</button>
          <button
           onClick={()=> setColor("black")}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
           style={{backgroundColor:"black"}}
          >Black</button>
          <button
           onClick={()=> setColor("orange")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"orange"}}
          >Orange</button>
          <button
           onClick={()=> setColor("#00FFFF")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"#00FFFF"}}
          >Cyan</button>
          <button
           onClick={()=> setColor("#800000")}
           className=' outline-none px-4 py-1 rounded-full text-white shadow-lg '
           style={{backgroundColor:"#800000"}}
          >Maroon</button>
          <button
           onClick={()=> setColor("#00FF00")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"#00FF00"}}
          >Lime</button>
          <button
           onClick={()=> setColor("#C0C0C0")}
           className=' outline-none px-4 py-1 rounded-full text-black shadow-lg '
           style={{backgroundColor:"#C0C0C0"}}
          >Silver</button>
        </div>
      </div>
    </div>
  )
}

export default App
