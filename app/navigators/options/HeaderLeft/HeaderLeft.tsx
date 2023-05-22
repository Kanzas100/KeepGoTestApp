/* eslint-disable react-native/no-inline-styles */
import React, { FC, useCallback } from "react"
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native"

import { StackActions, useNavigation } from "@react-navigation/native"
import { Icon } from "@rneui/themed"

const hitSlop = {}

type Props = {
  style?: StyleProp<ViewStyle>
  onBack?: () => void
}

const HeaderLeft: FC<Props> = ({ onBack }) => {
  const navigation = useNavigation()
  const handleBack = useCallback(() => {
    if (onBack) {
      onBack()
    } else {
      navigation.dispatch(StackActions.popToTop())
    }
  }, [navigation, onBack])

  if (!navigation.canGoBack()) {
    return null
  }

  return (
    <TouchableOpacity
      onPress={handleBack}
      style={{
        width: 40,
        height: 40,

        justifyContent: "center",
        alignItems: "flex-start",
      }}
      hitSlop={hitSlop}
    >
      <Icon size={17} name="arrow-back-ios" />
    </TouchableOpacity>
  )
}

export default HeaderLeft
