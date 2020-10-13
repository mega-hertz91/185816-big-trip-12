export default class Model {
  constructor() {
    if (new.target === Model) {
      throw new Error(`Can't instantiate Abstract, only concrete one.`);
    }
  }

  create() {
    throw new Error(`this abstract method create`);
  }

  save() {
    throw new Error(`this abstract method save`);
  }

  update() {
    throw new Error(`this abstract method update`);
  }

  delete() {
    throw new Error(`this abstract method delete`);
  }
}
