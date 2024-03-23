import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ViewApp from './ViewApp'


const AppDemo = () => {
  return (
    <Provider store={store}>
      <ViewApp/>
    </Provider>
  )
}

export default AppDemo

const styles = StyleSheet.create({})
