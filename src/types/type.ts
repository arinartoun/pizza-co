export interface Order {
  id?: number;
  username: string;
  status?: string;
  priority: boolean;
  priorityPrice?: number;
  orderPrice?: number;
  estimatedDelivery?: string;
  phone: string;
  cart: CartItem[];
}
export interface MenuItem {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
}
export interface CartItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}
