import { useState } from "react"
function App() {

  const [color,setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-150" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "red"}} onClick={() => {setcolor("red")}}>red</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "green"}} onClick={() => {setcolor("green")}}>green</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "blue"}} onClick={() => {setcolor("blue")}}>blue</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "orange"}} onClick={() => {setcolor("orange")}}>orange</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "yellow"}} onClick={() => {setcolor("yellow")}}>yellow</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "pink"}} onClick={() => {setcolor("pink")}}>pink</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "violet"}} onClick={() => {setcolor("violet")}}>violet</button>
            <button className="outline-none px-4 rounded-full" style={{backgroundColor: "brown"}} onClick={() => {setcolor("brown")}}>brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
