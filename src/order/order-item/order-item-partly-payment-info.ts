
export type OrderItemPartlyPaymentInfo = {
  deadline: Date; // the deadline for the next partly payment
  amountLeftToPay: number; // the amount left to pay on buyout of this item
}
