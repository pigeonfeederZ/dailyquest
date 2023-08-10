
import  React, { useState , useEffect } from 'react'

const calcTimeLeft = () => {
    const curDatetime = new Date()
    const dayendDatetime = new Date(curDatetime.getFullYear(), curDatetime.getMonth(), curDatetime.getDate(), 23, 59, 59)
    const timeLeft = dayendDatetime - curDatetime
    return timeLeft
}

const timedeltaToString = (timedelta) => {
    // const hours = Math.floor(deltatime / (1000 * 60 * 60))
    // const minutes = Math.floor((deltatime % (1000 * 60 * 60)) / (1000 * 60))
    // const seconds = Math.floor((deltatime % (1000 * 60)) / 1000)
    // return `${hours}:${minutes}:${seconds}`
    // get total seconds between the times

    var delta = timedelta / 1000;
    // // calculate (and subtract) whole days
    // var days = Math.floor(delta / 86400);
    // delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    const hoursStr = (hours).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false})
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    const minutesStr = (minutes).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false})
    delta -= minutes * 60;

    // what's left is seconds
    const seconds = Math.floor(delta % 60);  // in theory the modulus is not required
    const secondsStr = (seconds).toLocaleString(undefined, {minimumIntegerDigits: 2, useGrouping:false})
    return `${hoursStr}:${minutesStr}:${secondsStr}`
}


export const TodayCountdownClock = () => {

    // var [date,setDate] = useState(new Date());
    var [date,setDate] = useState(calcTimeLeft());
    

    useEffect(() => {
        var timer = setInterval(()=>setDate(calcTimeLeft()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div
        className="clock"
        >
            <span className="clock-descpt">Refreshes In  </span> 
            <span className="clock-time">{timedeltaToString(date)}</span>
        </div>
    )
}

export default TodayCountdownClock