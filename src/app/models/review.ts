export class Review {
    userId: number;
    themeId: number;
    rating: number;
    comment: string;

    constructor(user: number, theme: number) {
        this.userId=user;
        this.themeId=theme;
        this.rating=-1;
        this.comment='';
    }
}