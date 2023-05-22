/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components/Text"
import { ToastData } from "react-native-toast-message"
import { useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export interface CustomToastProps extends ToastData {
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const CustomToast = observer(function CustomToast(props: CustomToastProps) {
  const { ...rest } = props
  const insets = useSafeAreaInsets()
  const [height, setHeight] = useState(120)

  return (
    <View style={{ ...styles, height }}>
      <View onLayout={(data) => setHeight(data.nativeEvent.layout.height + insets.top * 2)}>
        <Text text={rest.text1} />
        <Text text={rest.text2} />
      </View>
    </View>
  )
})

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgba(244, 112, 98, .9)",
    justifyContent: "flex-end",
    padding: 24,
  },
}
