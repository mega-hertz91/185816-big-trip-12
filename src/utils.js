import {MONTHS, unixDateValue} from "./const";

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

export const sortEventsByDate = (a, b) => {
  if (a.dateStart > b.dateStart) {
    return 1;
  }
  if (a.dateStart < b.dateStart) {
    return -1;
  }
  return 0;
};
export const splitIntoDays = (r, a) => {
  r[a.dateStart] = r[a.dateStart] || [];
  r[a.dateStart].push(a);
  return r;
};

export const makeRoute = (tripList) => {
  const cities = new Set();
  let value = 0;
  const dates = new Set();
  tripList.forEach(function (trip) {
    cities.add(trip.destination);
    value = value + trip.value;
    dates.add(parseDateDayFormat(trip.dateStart));
  });
  return {
    cities: [...cities].join(` &mdash; `),
    value,
    dates: generateDateRoute([...dates])
  };
};

export const generateDateRoute = (dates) => {
  const start = dates[0].split(` `);
  const finish = dates[dates.length - 1].split(` `);

  if (start[0] === finish[0]) {
    return start.join(` `) + ` &mdash; ` + finish[1];
  } else {
    return start.join(` `) + ` &mdash; ` + finish.join(` `);
  }
};

export const getDateFormatEdit = (dateStr) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat(`en-US`, {
    year: `numeric`,
    month: `numeric`,
    day: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
    hour12: false,
    formatMatcher: `basic`
  });
  return formatter.format(date);
};
