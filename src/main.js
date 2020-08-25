import InfoView from "./views/info";
import MainMenuView from "./views/menu";
import MainFilterView from "./views/filter";
import MainSortView from "./views/sort";
import {createEventItemTemplate} from "./views/event-item";
import {createEventList} from "./views/event-list";
import {createEventDay} from "./views/event-day";
import EventDayList from "./views/event-day-list";
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

render(tripEvents, new MainSortView(), RenderPosition.BEFOREEND);
render(tripEvents, new EventDayList(), RenderPosition.BEFOREEND);
