import {createInformationTemplate} from "./views/info";
import {createMenuTemplate} from "./views/menu";
import {createFilterTemplate} from "./views/filter";
import {createSortTemplate} from "./views/sort";
import {createEventItemTemplate} from "./views/event-item";
import {createEventEditTemplate} from "./views/event-edit-item";
import {createEventList} from "./views/event-list";
import {createEventDay} from "./views/event-day";
import {createEventDayList} from "./views/event-day-list";
import {createEventNewDestinationTemplate} from "./views/event-new-destination";
import {render} from "./utils";

const EVENT_COUNT = 3;

const mainHeader = document.querySelector(`.page-header`);
const eventHeaderInfo = mainHeader.querySelector(`.trip-main`);
const mainControls = eventHeaderInfo.querySelector(`.trip-main__trip-controls`);

render(eventHeaderInfo, createInformationTemplate(), `afterbegin`);
render(mainControls, createMenuTemplate(), `afterbegin`);
render(mainControls, createFilterTemplate(), `beforeend`);

const mainTag = document.querySelector(`.page-body__page-main`);
const tripEvents = mainTag.querySelector(`.trip-events`);

render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createEventNewDestinationTemplate(), `beforeend`);
render(tripEvents, createEventDayList(), `beforeend`);

const tripDayList = tripEvents.querySelector(`.trip-days`);

for (let i = 0; i < EVENT_COUNT; i++) {
  render(tripDayList, createEventDay(i + 1), `beforeend`);
}

const tripDayItems = tripEvents.querySelectorAll(`.trip-days__item`);

tripDayItems.forEach(function (list) {
  render(list, createEventList(), `beforeend`);
});

const tripEventsList = tripEvents.querySelectorAll(`.trip-events__list`);

tripEventsList.forEach(function (list) {
  for (let i = 0; i < EVENT_COUNT; i++) {
    render(list, createEventItemTemplate(), `beforeend`);
  }
  render(list, createEventEditTemplate(), `beforeend`);
});
