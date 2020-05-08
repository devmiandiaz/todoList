import React, { useState, useContext, useCallback } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { ItemContext } from './hooks/useTodo'
import { scale } from './utils/dimension'
import Task from './Task'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
    alignItems: 'center',
  },
  input: {
    height: 10,
    flex: 1,
    fontSize: 20,
    minHeight: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#999999',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
  todoWrapper: {
    width: '100%',
  },
})

const App = () => {
  const { todos, addTodo, checkItem, handleDelete } = useContext(ItemContext)
  const [inputValue, setInputValue] = useState('')

  const handleAdd = useCallback(
    (e) => {
      e.preventDefault()
      if (inputValue.length > 0) {
        addTodo({
          id: Math.random().toString(36).substr(2, 9),
          title: inputValue,
          createdAt: new Date().toLocaleDateString(),
          isDone: false,
        })
        setInputValue('')
      }
    },
    [addTodo, inputValue],
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            onChangeText={(value) => setInputValue(value)}
            placeholder="Add a new todo"
            value={inputValue}
          />
          <TouchableOpacity onPress={(e) => handleAdd(e)}>
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={30}
              color="#000000"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todoWrapper}>
          <FlatList
            horizontal={false}
            data={todos}
            renderItem={({ item }) => (
              <Task
                todo={item}
                handleCheck={checkItem}
                handleDelete={handleDelete}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App
