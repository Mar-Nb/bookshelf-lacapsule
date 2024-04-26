import { Book } from "./Book";

export interface Review {
  id?: string;
  name: string;
  stars: number;
  content: string;
  book: Book;
}

