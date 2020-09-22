import {makeRoute} from "./utils";
import {renderPointTripItem} from "./mock/trip";
import Board from "./presenter/board";
import Header from "./presenter/header";

const TRIPS_COUNT = 15;
const tripList = new Array(TRIPS_COUNT).fill().map(renderPointTripItem);

const route = makeRoute(tripList);

const header = new Header(route);
header.init();

const board = new Board(tripList);
board.init();
