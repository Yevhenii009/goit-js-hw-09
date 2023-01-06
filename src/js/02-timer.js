import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const inputForm = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const timerForm = document.querySelector('.timer');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');

buttonStart.addEventListener('click', () => timer.timerStart());

buttonStart.setAttribute('disabled', true);
let userDate = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      userDate = new Date();
    } else {
      buttonStart.disabled = false;
      buttonStart.removeAttribute('disabled');
      userDate = selectedDates[0];
    }
  }
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000));

class Timer  {
  constructor() {
    this.isActive = false;
    this.timerId = null;
    buttonStart.disabled = true;
  }
  timerStart() {
    if (this.isActive) {
      return;
    }
  this.isActive = true;
  this.timerId = setInterval(() => {
    const currentTime = Date.now();
    const newTime = userDate - currentTime;
    const components = convertMs(newTime);

    seconds.textContent = components.seconds;
    minutes.textContent = components.minutes;
    hours.textContent = components.hours;
    days.textContent = components.days;
    if (newTime <= 0) {
      this.stop;
        timerForm.innerHTML = "00:00:00";
      } 
  }, 1000)
  }
  timerStop() {
    clearInterval(this.timerId);
  }
}

const timer = new Timer();
flatpickr(inputForm, options);
