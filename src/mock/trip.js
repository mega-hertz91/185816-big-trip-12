import {getRandomInteger} from "../utils";
import {parseDateTimeFormat} from "../utils";
import {parseDateDayFormat} from "../utils";
import {getDateDiff} from "../utils";
import {SPREADS_DAY} from "../const";

const MIN_TIME_INTERVAL = 1200000;
const MAX_TIME_INTERVAL = 10800000;

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

export const offers = [
  {
    name: `Add language`,
    value: 30
  },
  {
    name: `Travel by train`,
    value: 40
  },
  {
    name: `Add meal`,
    value: 15
  },
  {
    name: `Choose seats`,
    value: 5
  }
];

const values = [
  450,
  120,
  250,
  960,
  140
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

const generateStartDate = () => {
  const currentDate = Date.parse(new Date());
  return new Date(SPREADS_DAY[getRandomInteger(0, SPREADS_DAY.length - 1)] + currentDate);
};

const generateFinishDate = (startDate) => {
  const currentDate = Date.parse(startDate);
  return new Date(getRandomInteger(MIN_TIME_INTERVAL, MAX_TIME_INTERVAL) + currentDate);
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
    offers: getOffers,
    parseDateDayFormat,
    parseDateTimeFormat,
  };
};
