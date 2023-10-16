'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Drink, MenuGroup } from './types';
import { drinkOption, menuGroup } from '../_datas/menu';

type CartContextType = {
    cart: CartItem[];
    groupMenu: MenuGroup[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
};

const defaultCart: CartContextType = {
    cart: [],
    groupMenu: [],
    addToCart: (item) => {},
    removeFromCart: (itemId) => {},
    clearCart: () => {}
}

const CartContext = createContext<CartContextType>(defaultCart);

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider = ({ children } : CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [groupMenu, setGroupMenu] = useState<MenuGroup[]>(menuGroup);
    const [drinks, setDrinks] = useState<Drink[]>(drinkOption);
    
  
    const addToCart = (item: CartItem) => {
      setCart((prevCart) => [...prevCart, item]);
    };
  
    const removeFromCart = (itemId: number) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    return (
      <CartContext.Provider value={{ cart, groupMenu, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
};


// Create a custom hook to access the context
export const useCart = () => {
    const context = useContext(CartContext);
  
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
  
    return context;
};

export const ContextWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <CartProvider>
    {children}
    </CartProvider>
  )
}