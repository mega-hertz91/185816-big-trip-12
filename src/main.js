"use strict";

const EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const createInformationTemplate = () => {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
          <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
            </div>
            <p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
            </p>
          </section>`
  );
};

const mainHeader = document.querySelector(`.page-header`);
const mainTag = document.querySelector(`.page-body__page-main`);
const eventHeaderInfo = mainHeader.querySelector(`.trip-main`);

render(eventHeaderInfo, createInformationTemplate(), `afterbegin`);

