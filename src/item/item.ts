import { BlDocument } from "../bl-document/bl-document";
import { ItemType } from "./item-type";
import { ItemInfo } from "./item-info";

export class Item extends BlDocument {
  title: string;
  type: ItemType;
  price: number;
  taxRate: number;
  digital: boolean;
  info: ItemInfo;
  buyback: boolean;
  categories: string[];
}
