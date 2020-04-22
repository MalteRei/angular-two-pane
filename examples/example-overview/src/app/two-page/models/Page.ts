import { IPage } from './IPage';
import { IParagraph } from './IParagraph';

export class Page implements IPage{
    private Title: string;
    public get title(): string {
        return this.Title;
    }
    public set title(value: string) {
        this.Title = value;
    }
    private Paragraphs: IParagraph[];
    public get paragraphs(): IParagraph[] {
        return this.Paragraphs;
    }
    public set paragraphs(value: IParagraph[]) {
        this.Paragraphs = value;
    }

    constructor(title: string, paragraphs: IParagraph[]){
        this.title = title;
        this.paragraphs = paragraphs;
    }

}