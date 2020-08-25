import View from "./view";

const createEventItemTemplate = (event) => {
  return (
    `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${event.pointType.toLowerCase()}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${event.pointType} to ${event.destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${event.dateStart.toISOString()}">${event.parseDateTimeFormat(event.dateStart)}</time>
                        &mdash;
                        <time class="event__end-time" datetime="${event.dateStart.toISOString()}">${event.parseDateTimeFormat(event.dateFinish)}</time>
                      </p>
                      <p class="event__duration">
                       ${event.dateDiff.day !== 0 ? event.dateDiff.day + `D` : ``}
                       ${event.dateDiff.hour !== 0 ? event.dateDiff.hour + `H` : ``}
                       ${event.dateDiff.minutes !== 0 ? event.dateDiff.minutes + `M` : ``}
                       </p>
                    </div>

                    <p class="event__price">
                      &euro;&nbsp;<span class="event__price-value">${event.value}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">Order Uber</span>
                        &plus;
                        &euro;&nbsp;<span class="event__offer-price">20</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`
  );
};

export default class EventItemView extends View {
  constructor(event) {
    super();
    this._event = event;
  }

  getTemplate() {
    return createEventItemTemplate(this._event);
  }
}
