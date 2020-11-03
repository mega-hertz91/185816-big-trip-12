import {parseDateDayFormat} from "../utils";
import View from "./view";

const createEventDay = (day, index) => {
  const date = new Date(day);

  return (
    `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index + 1}</span>
                <time class="day__date" datetime="${date.toISOString()}">${parseDateDayFormat(new Date(day[0]))}</time>
              </div>
            </li>`
  );
};

export default class EventDayView extends View {
  constructor(day, index) {
    super();
    this._day = day;
    this._index = index;
  }

  getTemplate() {
    return createEventDay(this._day, this._index);
  }
}
