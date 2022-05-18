export class AuthorBio {
    bio: string

    constructor(authorBio: any) {
        this.bio = authorBio.title;

    }

    getBio(): string {
        return this.bio;
    }
}