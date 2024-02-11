import { Theme } from "./theme";

export interface Book {
    id: string;
    title: string;
    author: string;
    pages: number;
    language: string;
    description: string;
    externalLink: string;
    coverPath: string;
    genres: string[];
}