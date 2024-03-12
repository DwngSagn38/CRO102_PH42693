
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FooterProps {
  timeUpdate : string;
  backgroundColor : string
}

const Footer: React.FC<FooterProps> = ({timeUpdate,backgroundColor}) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor,height: '8%'}]}>
      <Text>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})