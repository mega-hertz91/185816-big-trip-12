import {MONTHS} from "./const";
import {DATE_VALUE} from "./const";

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

  if (currentDate > DATE_VALUE.day) {
    day = Math.floor(currentDate / 1000 / 60 / 60 / 24).toFixed(0);
    currentDate = currentDate - (day * DATE_VALUE.day);
  }

  if (currentDate > DATE_VALUE.hour) {
    hour = Math.floor(currentDate / 1000 / 60 / 60).toFixed(0);
    currentDate = currentDate - (hour * DATE_VALUE.hour);
  }

  if (currentDate > DATE_VALUE.minutes) {
    minutes = Math.floor(currentDate / 1000 / 60).toFixed(0);
  }

  return {day, hour, minutes};
};
