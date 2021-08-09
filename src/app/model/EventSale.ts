import { EventSalePresale } from "./EventSalePresale";
import { EventSalePublic } from "./EventSalePublic";

export interface EventSale {
  public: EventSalePublic;
  preSales: EventSalePresale[];
}
