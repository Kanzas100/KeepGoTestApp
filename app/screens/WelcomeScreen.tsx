import { useStores } from "app/models"
import { AppStackScreenProps } from "app/navigators"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { Button, FlatList, View, ViewStyle } from "react-native"
import Toast from "react-native-toast-message"

import { UserCard } from "../components"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const { usersStore } = useStores()
  const { usersList, userListPending, getUsers } = usersStore

  useEffect(() => {
    getUsersData()
  }, [])

  const getUsersData = async () => {
    console.log("getting USers")
    await getUsers()
  }

  const renderItem = ({ item }) => {
    return <UserCard user={item} />
  }

  return (
    <View style={{ ...$container }}>
      <FlatList
        data={usersList?.results}
        renderItem={renderItem}
        refreshing={userListPending}
        onRefresh={getUsersData}
        keyExtractor={(item, index) => "key" + index}
      />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
}
