import { Book } from "./book";
import { Review } from "./review";

export interface Theme {
    id: string;
    title: string;
    description?: string;
    imagePath?: string;
    books: Book[];
    genres: string[];
    reviews: Review[];
    rating?: number;
}