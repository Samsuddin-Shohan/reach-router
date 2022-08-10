import React, { useState } from 'react';
import Buttons from '../components/counter/Buttons';
import DisplayCount from '../components/counter/DisplayCount';
import Input from '../components/counter/Input';
import Layout from '../components/Layout/Layout';

const Counter = () => {
    const [increaseCount,setIncreaseCount]=useState(parseInt(1));
    const [decreaseCount,setDecreaseCount]=useState(parseInt(1));
    const [count,setCount]=useState(parseInt(1));
    console.log(increaseCount,decreaseCount,count);
    const handleIncrease = ()=>{
        setCount(count+increaseCount);
        console.log('handleIncrease called');

    }
    const handleDecrease = ()=>{
        setCount(count-decreaseCount);
        console.log('handleDecrease called');
    }
    
    const handleIncreaseCount = (e)=>{
        setIncreaseCount(parseInt(e.target.value));
        console.log('handleIncreaseCount called');

    }
    const handleDecreaseCount = (e)=>{
        setDecreaseCount(parseInt(e.target.value));
        console.log('handleDecreaseCount called');

    }
    return (
        <Layout>
        <DisplayCount count={count}></DisplayCount>
      
        <Input decreaseCount={decreaseCount} increaseCount={increaseCount}   handleIncreaseCount={handleIncreaseCount} handleDecreaseCount = {handleDecreaseCount}></Input>
        <Buttons handleIncrease={handleIncrease} handleDecrease = {handleDecrease}></Buttons>
       </Layout>
    );
};

export default Counter;