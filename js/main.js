const countdown = document.querySelector('.countdown');

//set launch date in miliseconds
const launchDate = new Date('Oct 8, 2025 00:00:00').getTime();

//Update every second

const intvl = setInterval(() => {
    //Get todays date and time in miliseconds
    const now = new Date().getTime();

    //Distance from now to launch
    const distance = launchDate - now;

    //Time Calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(days, hours, minutes, seconds);
      // Time calculation

    //Display result 
    countdown.innerHTML = `
    <div class="rounded bg-warning col-sm m-3 p-3 fs-big fw-bold">${days} <span class="d-block fs-5 fw-light"> Days</span></div>
    <div class="rounded bg-translucid col-sm m-3 p-3 fs-big fw-bold">${hours} <span class="d-block fs-5 fw-light"> Hours</span></div>
    <div class="rounded bg-translucid col-sm m-3 p-3 fs-big fw-bold">${minutes} <span class="d-block fs-5 fw-light"> Minutes</span></div>
    <div class="rounded bg-translucid col-sm m-3 p-3 fs-big fw-bold">${seconds} <span class="d-block fs-5 fw-light"> Seconds</span></div>
    `;

    //if launch day passed
    if (distance < 0) {
        //stop countdown
        clearInterval(intvl);
        //style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML= 'Launched!'
    }

}, 1000);