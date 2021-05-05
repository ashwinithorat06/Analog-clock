// setInterval after 1sec=1000ms
setInterval(()=>{
    // get date n time
    let d = new Date();
    // get hour val
    let hTime = d.getHours();
    // get minute val
    let mTime = d.getMinutes();
    // get seconds val
    let sTime = d.getSeconds();

    // get hour hand rotation
    hRotation = 30*hTime + (mTime/2);
    // get minute hand rotation
    mRotation = 6*mTime;
    // get second hand rotaion
    sRotation = 6*sTime;

    // style hour, minute, second hands rotation
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
},1000) 
