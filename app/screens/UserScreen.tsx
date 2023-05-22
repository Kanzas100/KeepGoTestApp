/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleProp, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Text, UserInfoCard } from "app/components"
import { Avatar } from "@rneui/themed"
import { typography } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface UserScreenProps extends NativeStackScreenProps<AppStackScreenProps<"User">> {}

export const UserScreen: FC<UserScreenProps> = observer(function UserScreen(props: any) {
  const { route } = props
  const { user } = route.params
  const { first, last, title } = user.name
  console.log(user)

  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerWrapper}>
        <Avatar
          containerStyle={styles.avatarConteiner}
          rounded
          source={{ uri: user.picture.large }}
          size={"xlarge"}
        />
        <Text style={styles.fontsNormal}>{`${title}. ${first} ${last}, ${user.dob.age}`}</Text>
        <UserInfoCard user={user} />
      </View>
    </View>
  )
})

const styles = {
  rootContainer: {
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
  innerWrapper: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    marginTop: 50,
  } as StyleProp<ViewStyle>,
  avatarConteiner: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  fontsNormal: {
    fontSize: 24,
    marginVertical: 30,
    fontFamily: typography.fonts.lato.normal,
  },
}
