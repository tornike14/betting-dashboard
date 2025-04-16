import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import bettingReducer from '../../features/betting/bettingSlice';

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      betting: bettingReducer,
    },
    preloadedState,
  });
};

export const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const store = createTestStore();
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
}; 