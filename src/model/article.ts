export class Article {
    id: number;
    title: string;
    content: string;
    authorList: string;

    constructor(id: number, title: string, content: string, authorList: string) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.authorList = authorList;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    getAuthor(): string {
        return this.authorList;
    }
}