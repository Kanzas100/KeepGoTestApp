import { getUsersList } from "app/services/api/user-api"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const UsersModel = types
  .model("Users")
  .props({
    usersList: types.frozen(),
  })
  .volatile(() => ({
    userListPending: false,
  }))
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveUserList: (userList) => {
      self.usersList = userList
    },
    setUserListPending: (status) => {
      self.userListPending = status
    },
  }))
  .actions((self) => ({
    getUsers: async () => {
      try {
        self.setUserListPending(true)
        const response = await getUsersList()
        await self.saveUserList(response)
      } catch (e) {
        console.log(e)
      } finally {
        self.setUserListPending(false)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Users extends Instance<typeof UsersModel> {}
export interface UsersSnapshotOut extends SnapshotOut<typeof UsersModel> {}
export interface UsersSnapshotIn extends SnapshotIn<typeof UsersModel> {}
export const createUsersDefaultModel = () => types.optional(UsersModel, {})
