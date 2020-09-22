import EventDayListView from "../views/event-day-list";
import EventListView from "../views/event-list";
import EventItemView from "../views/event-item";
import {render, RenderPosition} from "../utils/render";
import EventDayView from "../views/event-day";
import EventNoPointsView from "../views/no-points";
import Event from "../presenter/event";

export default class Board {
  constructor(list) {
    this._list = list;
    this._eventDayList = new EventDayListView();
    this._eventList = new EventListView();
    this._eventBlock = document.querySelector(`.trip-events`);
  }

  init() {
    if (this._list.length !== 0) {
      let list = this._getArrayEvents(this._list.slice());
      render(this._eventBlock, this._eventDayList, RenderPosition.BEFOREEND);
      this._renderEventList(list);
    } else {
      render(this._eventBlock, new EventNoPointsView(), RenderPosition.BEFOREEND);
    }
  }

  _sortEventsByDate(a, b) {
    if (a.dateStart > b.dateStart) {
      return 1;
    }
    if (a.dateStart < b.dateStart) {
      return -1;
    }
    return 0;
  }

  _getArrayEvents(list) {
    list = list.sort(this._sortEventsByDate);
    list = list.reduce(this._splitIntoDays, {});
    return Object.entries(list);
  }

  _splitIntoDays(r, a) {
    r[a.dateStart] = r[a.dateStart] || [];
    r[a.dateStart].push(a);
    return r;
  }

  _renderEventList(list) {
    render(this._eventBlock, this._eventDayList, RenderPosition.BEFOREEND);
    list.forEach((day, index) => {
      const eventList = new EventListView();
      render(this._eventDayList, this._renderEventDay(day, index), RenderPosition.BEFOREEND);
      let days = document.querySelectorAll(`.trip-days__item`);
      render(days[index], eventList, RenderPosition.BEFOREEND);
      day[1].forEach((data) => {
        const event = new Event(data);
        event.init(eventList);
      });
    });
  }

  _renderEventDay(day, index) {
    return new EventDayView(day, index);
  }

  _renderItemEvent(event) {
    return new EventItemView(event);
  }
}
