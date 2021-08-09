import { TicketEvent } from "./TicketEvent";

export interface PagedTicketEvents {
  events: TicketEvent[];
  totalPages: number;
}
