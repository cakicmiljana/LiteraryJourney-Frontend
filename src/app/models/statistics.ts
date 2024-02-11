export interface Statistics {
    userId: string;
    genres: Map<string, number>;
    pages: Map<string, number>;
    authors: Map<string, number>;
    languages: Map<string, number>;
}