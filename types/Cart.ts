export interface Cart {
  id: string;
  book: string;
  copy: number;
}

export interface Article extends Cart {
  title: string;
  price: number;
  description: string;
}
