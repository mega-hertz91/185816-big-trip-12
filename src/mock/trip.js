import {getRandomInteger} from "../utils";

const SPREADS_DAY = [
  86401900,
  17283200,
  259209150
];

const DAY = 86400000;
const HOUR = 3600000;
const MINUTES = 6000;
const MIN_TIME_INTERVAL = 1200000;
const MAX_TIME_INTERVAL = 10800000;

const MONTHS = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `July`,
  `Aug`,
  `Sept`,
  `Oct`,
  `Nov`,
  `Dec`
];

const pointTypes = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const destinations = [
  `Amsterdam`,
  `London`,
  `Berlin`,
  `Paris`,
  `Geneva`
];

const offers = [
  `Add language + 30`,
  `Travel by train + 40`,
  `Add meal +15`,
  `Choose seats + 5`
];

const values = [
  `450`,
  `120`,
  `250`,
  `960`,
  `140`
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed
  finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue
  convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRandomPhotos = () => {
  return new Array(getRandomInteger(1, 10)).fill().map(function () {
    return `http://picsum.photos/248/152?r=${Math.random()}`;
  });
};

const getOffers = () => {
  const count = getRandomInteger(0, 1);

  if (count === 1) {
    return offers;
  } else {
    return false;
  }
};

export const parseDateDayFormat = (date) => {
  return MONTHS[date.getMonth()] + ` ` + date.getDate();
};

export const parseDateTimeFormat = (date) => {
  let currentDate = new Date(date);
  currentDate = currentDate.toTimeString().split(`:`);
  return currentDate[0] + `-` + currentDate[1];
};

const generateStartDate = () => {
  const currentDate = Date.parse(new Date());
  return new Date(SPREADS_DAY[getRandomInteger(0, SPREADS_DAY.length - 1)] + currentDate);
};

const generateFinishDate = (startDate) => {
  const currentDate = Date.parse(startDate);
  return new Date(getRandomInteger(MIN_TIME_INTERVAL, MAX_TIME_INTERVAL) + currentDate);
};

const getDateDiff = (dateStart, dateFinish) => {
  const start = Date.parse(dateStart);
  const finish = Date.parse(dateFinish);
  let currentDate = finish - start;
  let day = 0;
  let hour = 0;
  let minutes = 0;

  if (currentDate > DAY) {
    day = Math.floor(currentDate / 1000 / 60 / 60 / 24).toFixed(0);
    currentDate = currentDate - (day * DAY);
  }

  if (currentDate > HOUR) {
    hour = Math.floor(currentDate / 1000 / 60 / 60).toFixed(0);
    currentDate = currentDate - (hour * HOUR);
  }

  if (currentDate > MINUTES) {
    minutes = Math.floor(currentDate / 1000 / 60).toFixed(0);
  }

  return {day, hour, minutes};
};

export const renderPointTripItem = () => {
  const dateStart = generateStartDate();
  const dateFinish = generateFinishDate(dateStart);

  return {
    pointType: pointTypes[getRandomInteger(0, pointTypes.length - 1)],
    destination: destinations[getRandomInteger(0, destinations.length - 1)],
    description: descriptions[getRandomInteger(0, destinations.length - 1)],
    photos: getRandomPhotos(),
    dateStart,
    dateFinish,
    dateDiff: getDateDiff(dateStart, dateFinish),
    value: values[getRandomInteger(0, values.length - 1)],
    offers: getOffers(),
    parseDateDayFormat,
    parseDateTimeFormat,
  };
};
