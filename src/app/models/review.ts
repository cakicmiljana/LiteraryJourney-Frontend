export interface Review {
    id: string;
    userId: string;
    themeId: string;
    rating: number;
    comment: string;

    // constructor(user: number, theme: number) {
    //     this.userId=user;
    //     this.themeId=theme;
    //     this.rating=-1;
    //     this.comment='';
    // }
}