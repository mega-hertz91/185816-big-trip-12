import EventItem from "./event";
import EventDayView from "../views/event-day";

export default class EventsDay {
  constructor(events, index) {
    this.events = events[1];
    this.date = events[0];
    this.index = index;

    this.eventsList = this._createEventsList();
    this.day = this._createDay();
    this.init();
    console.log(this.day);
  }


  init() {
    this._addEvents();
    this._addDay();
  }

  _addEvents() {
    this.events.forEach((element) => {
      const elem = new EventItem(element);
      this.eventsList.appendChild(elem.templateItem.getElement());
    });
  }

  _addDay() {
    this.day.appendChild(this.eventsList);
  }

  _createDay() {
    const day = new EventDayView(this.date, this.index);
    return day.getElement();
  }

  _createEventsList() {
    const eventsList = document.createElement(`UL`);
    eventsList.className = `trip-events__list`;
    return eventsList;
  }
}
