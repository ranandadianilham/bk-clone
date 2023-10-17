"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItem, Drink, MenuGroup, Menus } from "./types";
import { drinkOption, menu, menuGroup } from "../_datas/menu";

type CartContextType = {
  cart: CartItem[];
  groupMenu: MenuGroup[];
  menus: Menus[];
  drinks: Drink[];
  currentMenuGroup: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  handleCurrentMenu: (id: number) => void;
};

const defaultCart: CartContextType = {
  cart: [],
  groupMenu: [],
  menus: [],
  drinks: [],
  currentMenuGroup: 0,
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  clearCart: () => {},
  handleCurrentMenu: () => {}
};

const CartContext = createContext<CartContextType>(defaultCart);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [groupMenu, setGroupMenu] = useState<MenuGroup[]>(menuGroup);
  const [drinks, setDrinks] = useState<Drink[]>(drinkOption);
  const [menus, setMenus] = useState<Menus[]>(menu);
  const [currentMenuGroup, setCurrentMenuGroup] = useState(0);

  const handleCurrentMenu = (id: number) => {
    setCurrentMenuGroup(id);
  };

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    console.log('cart',cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        groupMenu,
        drinks,
        menus,
        currentMenuGroup,
        addToCart,
        removeFromCart,
        clearCart,
        handleCurrentMenu
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the context
export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};
