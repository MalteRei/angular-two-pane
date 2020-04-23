import { IBook } from './IBook';
import { IPage } from './IPage';

export class Book implements IBook{
    private Title: string;
    public get title(): string {
        return this.Title;
    }
    public set title(value: string) {
        this.Title = value;
    }
    private Pages: IPage[];
    public get pages(): IPage[] {
        return this.Pages;
    }
    public set pages(value: IPage[]) {
        this.Pages = value;
    }

    constructor(title: string, pages: IPage[]){
        this.title = title;
        this.pages = pages;
    }

}
