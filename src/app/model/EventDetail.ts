import { EventImage } from "./EventImage";
import { EventProduct } from "./EventProduct";
import { EventSale } from "./EventSale";
import { EventSeatMap } from "./EventSeatMap";

export interface EventDetail {
  name: string;
  url: string;
  images: EventImage[];
  sales: EventSale;
  seatmap: EventSeatMap;
  products: EventProduct[];
}
