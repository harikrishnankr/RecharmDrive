import { useState } from 'react';

export const useInputList = <T,>(initialState: T[]) => {
  const [items, setItems] = useState<T[]>(initialState || []);

  const addItem = (newItem: T) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const deleteItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, newItem: T) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? newItem : item))
    );
  };

  return {
    items,
    addItem,
    deleteItem,
    updateItem,
    setItems,
  };
};
