import InfoView, {createInformationTemplate} from "./views/info";
import MainMenuView, {createMenuTemplate} from "./views/menu";
import MainFilterView, {createFilterTemplate} from "./views/filter";
import {createSortTemplate} from "./views/sort";
import {createEventItemTemplate} from "./views/event-item";
import {createEventList} from "./views/event-list";
import {createEventDay} from "./views/event-day";
import {createEventDayList} from "./views/event-day-list";
import {makeRoute, sortEventsByDate, splitIntoDays} from "./utils";
import {offers, renderPointTripItem} from "./mock/trip";
import {render, RenderPosition} from "./utils/render.js";

const TRIPS_COUNT = 15;
const tripList = new Array(TRIPS_COUNT).fill().map(renderPointTripItem);

tripList.sort(sortEventsByDate);
const route = makeRoute(tripList);

const trips = tripList.reduce(splitIntoDays, {});

const tripEventList = Object.entries(trips);

const mainHeader = document.querySelector(`.page-header`);
const eventHeaderInfo = mainHeader.querySelector(`.trip-main`);
const mainControls = eventHeaderInfo.querySelector(`.trip-main__trip-controls`);

render(eventHeaderInfo, new InfoView(route), RenderPosition.AFTERBEGIN);
render(mainControls, new MainMenuView(), RenderPosition.AFTERBEGIN);
render(mainControls, new MainFilterView(), RenderPosition.BEFOREEND);

const mainTag = document.querySelector(`.page-body__page-main`);
const tripEvents = mainTag.querySelector(`.trip-events`);

render(tripEvents, createSortTemplate(), `beforeend`);
render(tripEvents, createEventDayList(), `beforeend`);
