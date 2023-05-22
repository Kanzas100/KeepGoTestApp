/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { typography } from "app/theme"
import { Text } from "app/components/Text"

export interface UserInfoCardProps {
  user
  style?: StyleProp<ViewStyle>
}

export const UserInfoCard = observer(function UserInfoCard(props: UserInfoCardProps) {
  const { user } = props
  const { country, postcode, city, state, street } = user.location

  return (
    <View style={styles.mainContainer}>
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.fontsNormal} text={"Personal Info"} />
        <View>
          <Text
            style={styles.fontsLight}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            }
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.fontsNormal} text={"Contact Info"} />
        <Text>
          <Text style={styles.fontsNormal} text={`Email: `} />
          <Text style={styles.fontsLight} text={`${user.email}`} />
        </Text>
        <Text>
          <Text style={styles.fontsNormal} text={`Phone: `} />
          <Text style={styles.fontsLight} text={`${user.phone}`} />
        </Text>
        <View style={styles.addressContainer}>
          <Text style={styles.fontsNormal} text={`Address`} />
          <Text
            style={styles.fontsLight}
            text={`${country},${state},${city},${street.name} ${street.number},${postcode}`}
          />
        </View>
      </View>
    </View>
  )
})

const styles = {
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
    padding: 16,
  },
  infoContainer: {
    justifyContent: "center",
    flex: 1,
  } as StyleProp<ViewStyle>,
  addressContainer: {
    marginTop: 8,
  } as StyleProp<ViewStyle>,
  fontsNormal: {
    fontFamily: typography.fonts.lato.normal,
    textAlign: "center",
  } as StyleProp<TextStyle>,
  fontsLight: {
    fontFamily: typography.fonts.lato.light,
    textAlign: "center",
  } as StyleProp<TextStyle>,
}
