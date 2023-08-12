import {Direction} from "./Direction";
import {DirectionsNames} from "./DirectionsNames";

export class Directions {
    private static directions= new Map<string, Direction> ([
        [DirectionsNames.NORTH, new Direction(0,1,"n")],
        [DirectionsNames.EAST, new Direction(1,0,"e")],
        [DirectionsNames.SOUTH, new Direction(0,-1,"s")],
        [DirectionsNames.WEST, new Direction(-1,0,"w")]
    ]);
}