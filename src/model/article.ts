export class Article {
    title: string;
    content: string;
    author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {  
        return this.content;
    }

    getAuthor(): string {
        return this.author;
    }
}