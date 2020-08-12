import {MONTHS} from "./const";
import {unixDateValue} from "./const";

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const parseDateDayFormat = (date) => {
  return MONTHS[date.getMonth()] + ` ` + date.getDate();
};

export const parseDateTimeFormat = (date) => {
  let currentDate = new Date(date);
  currentDate = currentDate.toTimeString().split(`:`);
  return currentDate[0] + `-` + currentDate[1];
};


export const getDateDiff = (dateStart, dateFinish) => {
  const start = Date.parse(dateStart);
  const finish = Date.parse(dateFinish);
  let currentDate = finish - start;
  let day = 0;
  let hour = 0;
  let minutes = 0;

  if (currentDate > unixDateValue.DAY) {
    day = Math.floor(currentDate / unixDateValue.DAY).toFixed(0);
    currentDate = currentDate - (day * unixDateValue.DAY);
  }

  if (currentDate > unixDateValue.HOUR) {
    hour = Math.floor(currentDate / unixDateValue.HOUR).toFixed(0);
    currentDate = currentDate - (hour * unixDateValue.HOUR);
  }

  if (currentDate > unixDateValue.MINUTES) {
    minutes = Math.floor(currentDate / unixDateValue.MINUTES).toFixed(0);
  }

  return {day, hour, minutes};
};
