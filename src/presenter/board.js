import ModelEvents from "../models/modelEvents";

export default class Board {
  /**
   * @param modelEvents {ModelEvents}
   */
  constructor(modelEvents) {
    if (!(modelEvents instanceof ModelEvents)) {
      throw new Error(`Class not ModelEvents`);
    }

    this.modelEvents = modelEvents;
  }

  init() {
    console.log(this.modelEvents);
  }
}
