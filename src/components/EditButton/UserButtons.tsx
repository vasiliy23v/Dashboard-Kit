import * as React from 'react';
import { useState } from 'react';
import Dots from '../Dots/Dots';
import { UserPropsOnDel } from "../../api/types"
import ModalEditUser from '../Modal/ModalEditUser';
import "./UserButtom.scss"
const EditButton = () => {


    //, { user, onDelete }: UserPropsOnDel
    // console.log("user in UserButton", user);

    return (
        <div className='user-btn'>

            <Dots />
        </div>)
}

export default EditButton;