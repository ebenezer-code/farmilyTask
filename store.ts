import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface CartState {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}
// Function to get cart from localStorage
const getCartFromLocalStorage = (): Product[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

// Function to save cart to localStorage
const saveCartToLocalStorage = (cart: Product[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const useStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const newCart = [...state.cart, item];
      saveCartToLocalStorage(newCart); // Save to localStorage
      return { cart: newCart };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      saveCartToLocalStorage(newCart); // Save to localStorage
      return { cart: newCart };
    }),
  clearCart: () =>
    set(() => {
      saveCartToLocalStorage([]); // Clear localStorage
      return { cart: [] };
    }),
}));

export default useStore;
