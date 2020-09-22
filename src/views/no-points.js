import View from "./view";

const createNoPointsTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export default class EventNoPointsView extends View {
  getTemplate() {
    return createNoPointsTemplate();
  }
}
