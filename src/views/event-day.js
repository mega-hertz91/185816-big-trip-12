import {parseDateDayFormat} from "../mock/trip";

export const createEventDay = (day, index) => {
  const date = new Date(day[0]);

  return (
    `<li class="trip-days__item  day">
              <div class="day__info">
                <span class="day__counter">${index + 1}</span>
                <time class="day__date" datetime="${date.toISOString()}">${parseDateDayFormat(new Date(day[0]))}</time>
              </div>
            </li>`
  );
};
