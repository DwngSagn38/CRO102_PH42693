import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giam, tang } from './action'

const ViewApp = () => {

    // cài đặt thư viện : npm i react-redux
    // sử dụng useDispath => phân phối trạng thái xuống view
    // sử dụng useSelector => để lấy trạng thái từ kho
    const count = useSelector(state => state.dem)
    const dispath = useDispatch();

  return (
    <View style={styles.container}>
      <Text>dem : {count}</Text>
      <Button title='Tang' onPress={()=> dispath(tang())}/>
      <Button title='Giam' onPress={()=> {dispath(giam())}}/>
    </View>
  )
}

export default ViewApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    }
})