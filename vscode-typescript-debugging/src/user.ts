export interface User {
  id: string;
  name: string;
  discountRate?: number;
}

export function calculateDiscount(user: User, price: number): number {
    const rate = user.discountRate ?? 0;
  return price * (1 - rate);

}
