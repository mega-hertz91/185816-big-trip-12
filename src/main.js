import InfoView from "./views/info";
import MainMenuView from "./views/menu";
import MainFilterView from "./views/filter";
import MainSortView from "./views/sort";
import EventDayList from "./views/event-day-list";
import {makeRoute} from "./utils";
import {offers, renderPointTripItem} from "./mock/trip";
import {render, RenderPosition} from "./utils/render.js";
import Event from "./presenter/event";

const TRIPS_COUNT = 15;
const tripList = new Array(TRIPS_COUNT).fill().map(renderPointTripItem);

/*tripList.sort(sortEventsByDate);

const trips = tripList.reduce(splitIntoDays, {});

const tripEventList = Object.entries(trips);*/
const route = makeRoute(tripList);

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

const events = new Event(tripList);
console.log(events.init());
