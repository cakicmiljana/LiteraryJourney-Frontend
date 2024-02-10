import { Book } from "./book";

export interface Theme {
    id: number;
    title: string;
    description?: string;
    imagePath?: string;
    books: Book[];
    rating?: number;
}