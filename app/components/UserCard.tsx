import * as React from "react"
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

import { Avatar, ListItem } from "@rneui/themed"

import { useNavigation } from "@react-navigation/native"

export interface UserCardProps {
  user
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const UserCard = observer(function UserCard(props: UserCardProps) {
  const navigation = useNavigation<any>()
  const { user } = props
  const { first, last, title } = user.name
  const navigateToUser = () => navigation.push("User", { user })
  return (
    <TouchableOpacity onPress={navigateToUser}>
      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: user.picture.thumbnail }} />
        <ListItem.Content>
          <ListItem.Title>{`${title}. ${first} ${last}, ${user.dob.age}`}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  )
})
