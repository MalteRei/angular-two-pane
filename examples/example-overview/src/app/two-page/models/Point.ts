import { IPoint } from './IPoint';

export class Point implements IPoint{
    private X: number;
    public get x(): number {
        return this.X;
    }
    public set x(value: number) {
        this.X = value;
    }
    private Y: number;
    public get y(): number {
        return this.Y;
    }
    public set y(value: number) {
        this.Y = value;
    }
    constructor(x: number, y: number) {
        this.y = y;
        this.x = x;
    }

}
