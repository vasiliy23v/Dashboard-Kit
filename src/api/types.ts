export interface User {
  _id: string,
  name: string,
  email: string,
  address: string,
  created: string,
  image: string,
  priority: {
    color: string
    name: string
  },
  rate: number
}

export interface Priority extends PriorityHigher {
  high: { name: string, color: string },
  normal: { name: string, color: string },
  low: { name: string, color: string },
  //& {[key: string ]: {...obj} } TYPES
  //   interface D extends B, C {
  //     d(): void
  // }
}
export interface PriorityHigher {
  [key: string]: { name: string, color: string }
}

export interface UserPropsOnDel {
  user: User,
  users: User[],
  onDelete: ((id: string) => void),
  handleAddUser: ((user: any) => void)
  handleEditUser: ((user: any, id: any) => void)
}
export interface UserPropsFully {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: User,
  users: User[],
  onDelete: ((id: string) => void),
  handleAddUser: ((user: any) => void)
  handleEditUser: ((user: any, id: any) => void)


}