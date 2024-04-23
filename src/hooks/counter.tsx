import {useState} from "react";

const useCounter = ()=>{
  const [Count , setCount] = useState(0);

  const increment = ()=>{
    setCount(Count+1);
  }

  const decrement = ()=>{
    setCount(Count-1);
  }

  return {Count , increment , decrement};

};


export {useCounter} ;