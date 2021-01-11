export const getMs = (start) => {
    console.log('getMs ran');
    console.log('getMs return value:');
    console.log(Date.now() - start);
    return Date.now() - start;
}

export const msToSeconds = (duration) => {
    return Math.floor((duration / 1000) % 60);
}

export const updateSeconds = (clockVarName, valueToUpdate) => {
    clockVarName(valueToUpdate);
} 

export const trackTime = (start, clockVarName) => {
    console.log('trackTime ran');
    console.log('tracktimeVar start is:');
    console.log(start);
    console.log('trackTimeVar clockVarName is:');
    console.log(clockVarName);
    let timePassed = getMs(start);
    console.log('trackTimeVar timePassed is:');
    console.log(timePassed);
    let timeConverted = msToSeconds(timePassed);
    console.log('timeConverted is:');
    console.log(timeConverted);
    return timeConverted;
}

export const startClock = () => {
    console.log('startClock ran')
    let startTime = Date.now();
    console.log('start time is');
    console.log(startTime);
    return trackTime(startTime);
}

export const oldTrack = (start, setterFunction) => {
    let timePassed = (((Date.now() - start)/1000) % 60);
    setterFunction(timePassed);
}