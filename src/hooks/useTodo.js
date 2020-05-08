import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const LOCAL_STORAGE_TODO_KEY = 'todos'

export const ItemContext = createContext({})

const ItemContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      AsyncStorage.getItem(LOCAL_STORAGE_TODO_KEY)
        .then(
          (localStoragetodos) =>
            localStoragetodos && setTodos(JSON.parse(localStoragetodos)),
        )
        .catch((error) => new Error(error))
    })()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      AsyncStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos)).catch(
        (error) => new Error(error),
      )
    })()
  }, [todos])

  const addTodo = (item) => setTodos(() => [item, ...todos])

  const checkItem = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
        return item
      }),
    )
  }

  const handleDelete = (id) => setTodos(todos.filter((todo) => todo.id !== id))

  return (
    <ItemContext.Provider value={{ todos, addTodo, checkItem, handleDelete }}>
      {children}
    </ItemContext.Provider>
  )
}

export default ItemContextProvider
