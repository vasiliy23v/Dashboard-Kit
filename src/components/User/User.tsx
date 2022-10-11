import React, { useState } from "react";
import { UserPropsFully, UserPropsOnDel } from "../../api/types"
import AddUser from "../AddUser/AddUser";

import UserButtons from "../EditButton/UserButtons";
import ModalEditUser from "../Modal/ModalEditUser";




// type Priority = UserProps['user']['priority']
const User = ({ user, users, onDelete, handleAddUser, handleEditUser }: UserPropsOnDel) => {
  const [isOpen, setOpen] = React.useState(false);


  const closeModal = (e: boolean | ((prevState: boolean) => boolean)) => {
    setOpen(!e)
    console.log("NO", e);
  }
  const [isOpenModal, setIsOpenModal] = useState(false);
  // console.log("user in User", user);

  const onClickFunc = ({ isOpen, setOpen, user, onDelete }: UserPropsFully) => {

    // setIsOpenModal(isOpen = !isOpenModal)
    // console.log("EEEEEEE", isOpenModal);
    setOpen(true)

  }
  return (

    <tr key={user._id} className="user-tr">

      <td>
        <img src={user.image} alt="User" />
      </td>
      <td className="user-min">{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.created}</td>
      <td>
        <span
          style={{
            backgroundColor: user.priority.color,
            color: "#fff",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          {user.priority.name}
        </span>
      </td>
      <td style={{
        cursor: "pointer",
      }} onClick={() => onClickFunc({ isOpen, setOpen, user, users, onDelete, handleAddUser, handleEditUser })} >
        <UserButtons />

        <ModalEditUser isOpen={isOpen} setOpen={setOpen} user={user} users={users} onDelete={onDelete} handleAddUser={handleAddUser} handleEditUser={handleEditUser} />
        {/* <ModalEditUser user={user} onDelete={onDelete} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} /> */}
      </td>
    </tr >
  );
};

export default User;
