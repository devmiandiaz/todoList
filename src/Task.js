import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { scale } from './utils/dimension'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
  container: {
    minWidth: scale(200),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: (isDone) => ({
    textDecorationLine: isDone ? 'line-through' : 'none',
    lineHeight: 25,
    marginLeft: 5,
    fontSize: 20,
    minWidth: scale(100),
    width: scale(280),
    alignItems: 'baseline',
  }),
})

const Task = ({ todo, handleCheck, handleDelete }) => {
  const { id, title, isDone } = todo

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheck(id)}>
        <MaterialCommunityIcons
          name={isDone ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={30}
          color="#000000"
        />
      </TouchableOpacity>
      <Text style={styles.title(isDone)}>{title}</Text>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="#000000"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Task
