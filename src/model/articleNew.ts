export class ArticleNew {
    title: string;
    content: string;
    authorList: string;

    constructor(articleNew: any) {
        this.title = articleNew.title;
        this.content = articleNew.content;
        this.authorList = articleNew.authorList;
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