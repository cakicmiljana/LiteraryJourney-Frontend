import { Book } from "./book";
import { Statistics } from "./statistics";

export interface User {
    id: string;
    userType: string;
    username: string;
    password: string;
    country: string;
    themeIDs: string[];
    books: Book[];
    statistics: Statistics;

    // constructor() {
    //     this.id = -1;
    //     this.username='';
    //     this.password='';
    //     this.country='';
    // }
}