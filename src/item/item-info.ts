export interface ItemInfo {
  isbn: number;
  subject: string;
  year: number;
  price: Record<string, number>;
  weight: string;
  distributor: string;
  discount: number;
  publisher: string;
}
