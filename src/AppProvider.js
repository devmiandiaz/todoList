import React from 'react'
import App from './App'
import ItemContextProvider from './hooks/useTodo'

const AppProvider = () => (
  <ItemContextProvider>
    <App />
  </ItemContextProvider>
)

export default AppProvider
