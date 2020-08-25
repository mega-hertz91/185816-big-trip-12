import EventDayListView from "../views/event-day-list";
import EventListView from "../views/event-list";
import EventItemView from "../views/event-item";
import {render, RenderPosition} from "../utils/render";
import EventDayView from "../views/event-day";

export default class Event {
  constructor(list) {
    this._list = list;
    this._eventDayListComponent = new EventDayListView();
    this._eventList = new EventListView();
  }

  init() {
    let list = this._list.slice();
    list = list.sort(this._sortEventsByDate);
    list = list.reduce(this._splitIntoDays, {});

    console.log(this._renderEventList());
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

  _splitIntoDays(r, a) {
    r[a.dateStart] = r[a.dateStart] || [];
    r[a.dateStart].push(a);
    return r;
  }

  _renderEventList(list) {
    list.forEach((day, index) => {
      render(this._eventDayListComponent, new EventDayView(day, index), RenderPosition.BEFOREEND);
    });
  }

  _renderItemEvent(event) {
    const item = new EventItemView(event);
    return render(this._eventList, item, RenderPosition.BEFOREEND);
  }
}
