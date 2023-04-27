import React, { useState } from "react";
import Queue from "./Queue";

function QueueComponent() {
  const [queue, setQueue] = useState(new Queue());
  const [input, setInput] = useState("");
  const [top, setTop] = useState("");
  const [size, setSize] = useState(0);

  const handlePush = () => {
    setQueue(queue);
    queue.enqueue(input);
    setTop(queue.peek());
    setSize(queue.size());
    setInput("");
  };

  const handlePop = () => {
    queue.dequeue();
    setTop(queue.peek());
    setSize(queue.size());
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="md:flex flex-col  items-center">
      <h1 className="text-3xl text-indigo-500 m-10 font-bold text-center">
        Queue Data Structure
      </h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border-2 border-black rounded-lg px-4 py-2"
        placeholder="Enter a value"
      />
      <div className="flex flex-row space-x-4 space-y-4 items-center justify-center mb-10">
        <button
          onClick={handlePush}
          className="mt-4 border-2 border-black z-10 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-[#bbfdd8] flex-shrink-0"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="mt-4 border-2 border-black z-10 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-[#f8e1ee] flex-shrink-0"
        >
          Pop
        </button>
      </div>
      <h3 className="text-2xl text-black font-bold text-center mb-5">
        Queue Properties
      </h3>
      <div className="mt-4 flex flex-col border-2 font-thin border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-10 py-2 ">
        <span>Top Element: {top}</span>
        <span>Last Element: {queue.items[0]}</span>
        <span>Queue Size: {size}</span>
      </div>

      <div className="flex flex-col m-10 items-center justify-center">
        <h3 className="text-2xl text-red-400 font-bold text-center mb-5">
          Queue Elements
        </h3>
        <div className="flex flex-row space-x-4">
          <div className="text-center flex flex-row-reverse">            
            {queue.items.map((item) => (
              <span className="border-2 border-black bg-[#a3fc9d] rounded-md px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueComponent;
