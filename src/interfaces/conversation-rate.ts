import { Currency } from "../enums/currency";

export interface ConversationRate {
  from_currency?: Currency;
  to_currency?: Currency;
  conversation_rate?: number;
}
