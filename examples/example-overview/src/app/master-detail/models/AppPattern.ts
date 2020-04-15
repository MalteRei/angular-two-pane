import { IAppPattern } from './IAppPattern';

export class AppPattern implements IAppPattern{
    private Name: string;
    public get name(): string {
        return this.Name;
    }
    public set name(value: string) {
        this.Name = value;
    }
    private Paragraphs: string[];
    public get paragraphs(): string[] {
        return this.Paragraphs;
    }
    public set paragraphs(value: string[]) {
        this.Paragraphs = value;
    }
    private PictureLink: URL;
    public get pictureLink(): URL {
        return this.PictureLink;
    }
    public set pictureLink(value: URL) {
        this.PictureLink = value;
    }
    private LookAtLink: string;
    public get lookAtLink(): string {
        return this.LookAtLink;
    }
    public set lookAtLink(value: string) {
        this.LookAtLink = value;
    }

    constructor(name: string, paragraphs: string[], pictureLink: URL, lookAtLink: string) {
        this.name = name;
        this.paragraphs = paragraphs;
        this.pictureLink = pictureLink;
        this.lookAtLink = lookAtLink;
    }

}
