import { ISegment } from './ISegment';

export class Segment implements ISegment {
    constructor(width: number, height: number, top: number, left: number) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
    }
    private Width: number;
    public get width(): number {
        return this.Width;
    }
    public set width(value: number) {
        this.Width = value;
    }
    private Height: number;
    public get height(): number {
        return this.Height;
    }
    public set height(value: number) {
        this.Height = value;
    }
    private Top: number;
    public get top(): number {
        return this.Top;
    }
    public set top(value: number) {
        this.Top = value;
    }
    private Left: number;
    public get left(): number {
        return this.Left;
    }
    public set left(value: number) {
        this.Left = value;
    }
}
