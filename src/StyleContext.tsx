// StyleContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type StyleType = 'material-ui' | 'tailwind';

interface StyleContextProps {
  style: StyleType;
  toggleStyle: (style: StyleType) => void;
}

const StyleContext = createContext<StyleContextProps | undefined>(undefined);

export const useStyle = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider');
  }
  return context;
};

interface StyleProviderProps {
  children: ReactNode;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  const [style, setStyle] = useState<StyleType>('material-ui');

  const toggleStyle = () => {
    setStyle((prevStyle) => (prevStyle === 'material-ui' ? 'tailwind' : 'material-ui'));
  };

  return (
    <StyleContext.Provider value={{ style, toggleStyle }}>
      {children}
    </StyleContext.Provider>
  );
};
