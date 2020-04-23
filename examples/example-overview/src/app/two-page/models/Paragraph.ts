import { IParagraph } from './IParagraph';

export class Paragraph implements IParagraph{
    private Heading: string;
    public get heading(): string {
        return this.Heading;
    }
    public set heading(value: string) {
        this.Heading = value;
    }
    private Content: string;
    public get content(): string {
        return this.Content;
    }
    public set content(value: string) {
        this.Content = value;
    }

    constructor(heading: string, content: string) {
        this.content = content;
        this.heading = heading;
    }
}
