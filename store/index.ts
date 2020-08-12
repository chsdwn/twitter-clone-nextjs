import { createContext } from 'react';

export const StoreContext = createContext<{
  theme: '';
  changeTheme: (theme: any) => void;
}>(null);
