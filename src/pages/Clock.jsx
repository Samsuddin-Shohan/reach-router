import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import  * as dateFns from 'date-fns';
const getTimes = date =>{
    return{
        hour:dateFns.getHours(date),
        minute:dateFns.getMinutes(date),
        second:dateFns.getSeconds(date)
    }
}
const formateTime = time =>{
    const newTime = time<10?'0'+time:time;
    return newTime;
}

const Clock = () => {
    const [date,setDate]=useState(new Date());
    // console.log(date);
    useEffect(()=>{
        setTimeout(()=>{
               setDate(new Date()) 
        },1000)
    },[date])

    const time = getTimes(date);
    return (
       <Layout>
        <h1>Clock</h1>
        <h1>{formateTime(time.hour)} : {formateTime(time.minute)} : {formateTime(time.second)}</h1>
       </Layout>
    );
};

export default Clock;