import View from "./view";

const createEventDayList = () => {
  return (
    `<ul class="trip-days">`
  );
};
export default class EventDayList extends View {
  getTemplate() {
    return createEventDayList();
  }
}
