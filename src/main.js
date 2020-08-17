import {createInformationTemplate} from "./views/info";
import {createMenuTemplate} from "./views/menu";
import {createFilterTemplate} from "./views/filter";
import {createSortTemplate} from "./views/sort";
import {createEventItemTemplate} from "./views/event-item";
import {createEventList} from "./views/event-list";
import {createEventDay} from "./views/event-day";
import {createEventDayList} from "./views/event-day-list";
import {makeRoute, render, sortEventsByDate, splitIntoDays} from "./utils";
import {renderPointTripItem} from "./mock/trip";

const TRIPS_COUNT = 15;
const tripList = new Array(TRIPS_COUNT).fill().map(renderPointTripItem);

tripList.sort(sortEventsByDate);
const route = makeRoute(tripList);

const trips = tripList.reduce(splitIntoDays, {});

const tripEventList = Object.entries(trips);

const mainHeader = document.querySelector(`.page-header`);
const eventHeaderInfo = mainHeader.querySelector(`.trip-main`);
const mainControls = eventHeaderInfo.querySelector(`.trip-main__trip-controls`);

render(eventHeaderInfo, createInformationTemplate(route), `afterbegin`);
render(mainControls, createMenuTemplate(), `afterbegin`);
render(mainControls, createFilterTemplate(), `beforeend`);

const mainTag = document.querySelector(`.page-body__page-main`);
const tripEvents = mainTag.querySelector(`.trip-events`);

render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createEventDayList(), `beforeend`);

const tripDayList = tripEvents.querySelector(`.trip-days`);

tripEventList.forEach(function (day, index) {
  render(tripDayList, createEventDay(day, index), `beforeend`);
  const tripDayItem = tripEvents.querySelectorAll(`.trip-days__item`);
  render(tripDayItem[index], createEventList(), `beforeend`);
  const tripEventsList = tripEvents.querySelectorAll(`.trip-events__list`);
  day[1].forEach(function (event) {
    render(tripEventsList[index], createEventItemTemplate(event), `beforeend`);
  });
});
