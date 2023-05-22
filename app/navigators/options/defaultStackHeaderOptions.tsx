import React from "react"
import { StackNavigationOptions, TransitionPresets } from "@react-navigation/stack"

import HeaderLeft from "./HeaderLeft"
// import { Colors, Fonts } from "@styles/index"

const defaultStackHeaderOptions = (backgroundColor = "#F5F5F5"): StackNavigationOptions => ({
  ...TransitionPresets.SlideFromRightIOS,
  headerLeft: () => <HeaderLeft style={{}} />,
  headerStyle: {
    elevation: 0,
    backgroundColor,
    shadowColor: "transparent",
  },
  headerTitleStyle: {
    color: "black",
    fontSize: 17,
    lineHeight: 21,
  },
  headerShadowVisible: false,
})

export default defaultStackHeaderOptions
