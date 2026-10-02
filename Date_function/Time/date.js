function updatedate(){
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Padding numbers with leading zeros
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Padding milliseconds to 3 digits
    if (milliseconds < 10) {
        milliseconds = '00' + milliseconds;
    } else if (milliseconds < 100) {
        milliseconds = '0' + milliseconds;
    }

    const dateString = `${day}-${month}-${year}`;
    document.getElementById("date").innerHTML = dateString;
    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    document.getElementById("time").innerHTML = timeString;
}

// Run immediately when page loads
updatedate();

// Auto-update every 1 millisecond
setInterval(updatedate, 0.1);
