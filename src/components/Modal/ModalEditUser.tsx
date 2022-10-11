import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Description from '../Description/Descripton';
import "../Input/Input"
import { ModalEdit as arrForm } from "../../pages/Registration/modalConfig"
import "./ModalEditUser.scss"
import ReactDOM from 'react-dom';
import { UserPropsFully, UserPropsOnDel } from '../../api/types';

import { usePortal } from "../usePortal/usePortal";
import { priority } from '../../api/fake.api/priority';
import { useState } from 'react';


const ModalEditUser = ({ isOpen, setOpen, user, users, onDelete, handleEditUser }: UserPropsFully) => {
    // { user, onDelete, isOpenModal, setIsOpenModal }: UserPropsFully

    const [defaultUser, setDefaultUser] = useState(
        {
            // _id: user._id,
            name: user.name,
            email: user.email,
            address: user.address,
            created: user.created,
            image: user.image,
            priority: priority.high,
            rate: user.rate
        },
    );
    // const addUserFunction = (userrrrr: any) => {
    //     console.log("defaultUser", userrrrr);

    //     handleAddUser(userrrrr)
    //     setOpen(false)
    // }


    const deleteUserFunction = () => {
        onDelete(user._id)
        setOpen(false)
    }
    const editUserFunction = (userrrrr: any) => {
        console.log("userrrrr", userrrrr);

        handleEditUser(userrrrr, user._id)
        setOpen(false)
    }
    const portalRef = usePortal("modal");


    return ReactDOM.createPortal(
        // isOpenModal &&

        <div>
            {isOpen
                ? // Use react-dom to create a portal
                portalRef &&
                ReactDOM.createPortal(
                    // <div style={{ width: "100%" }}>
                    //     <h1>Hello from the modal!</h1>

                    //     <button onClick={() => setOpen(false)}>Close modal</button>
                    // </div>,

                    <div className='modal' onClick={() => setOpen(false)}>
                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>

                            {arrForm.headingForm.map(
                                (form) =>
                                    form && <Description key={form.h2} h2={form.h2} h3={form.h3} />
                            )}

                            <form className="form">

                                <label className="form-label" >
                                    <span><img src={defaultUser.image} alt="userPhoto" style={{ width: "100px", height: "100px", borderRadius: "50px" }} /></span>
                                    <span>Link on new Image</span>
                                    <div className="form-label-box">
                                        <input
                                            defaultValue={user.image}
                                            placeholder={"Link to image"}
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, image: e.target.value }))
                                                console.log(defaultUser)
                                            }}
                                            type="text"
                                        >

                                        </input>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Full name</span>
                                    <div className="form-label-box">
                                        <input
                                            type="text"
                                            placeholder={"Full name"}
                                            defaultValue={defaultUser.name}
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, name: e.target.value }))
                                                console.log(defaultUser)
                                            }}
                                        ></input>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Email</span>
                                    <div className="form-label-box">
                                        <input
                                            type="email"
                                            placeholder={"Email"}
                                            defaultValue={defaultUser.email}
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, email: e.target.value }))
                                            }}
                                        ></input>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Address</span>
                                    <div className="form-label-box">
                                        <input
                                            type="text"
                                            placeholder={"Address"}
                                            defaultValue={defaultUser.address}
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, address: e.target.value }))
                                            }}
                                        ></input>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Date</span>
                                    <div className="form-label-box">
                                        <input
                                            type="date"
                                            placeholder={"Date"}
                                            defaultValue={defaultUser.created}
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, date: e.target.value }))
                                            }}
                                        ></input>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Select</span>
                                    <div className="form-label-box">
                                        <select className="form-label-box-options" name="" id="cars" form="carform"
                                            onChange={(e) => {
                                                setDefaultUser(state => ({ ...state, priority: priority[e.target.value] }))
                                                console.log(console.log("Value: ", e.target.value, "; Display: ", defaultUser));

                                            }}>
                                            <>

                                                {Object.keys(priority).map((e) => {
                                                    return <option key={e} value={e}
                                                    >{priority[e].name}</option>
                                                })}
                                            </>
                                        </select>
                                    </div>
                                </label>
                                <label className="form-label">
                                    <span>Rate</span>
                                    <div className="form-label-box">
                                        <input
                                            type="number"
                                            placeholder={"Number"}
                                            defaultValue={defaultUser.rate}
                                        ></input>
                                    </div>
                                </label>




                                {/* handleAddUser */}

                                <div className="buttons">
                                    <Link to="/tickets" onClick={() => editUserFunction({
                                        // _id: defaultUser._id,
                                        name: defaultUser.name,
                                        email: defaultUser.email,
                                        address: defaultUser.address,
                                        created: defaultUser.created,
                                        image: defaultUser.image,
                                        priority: defaultUser.priority,
                                        rate: defaultUser.rate
                                    })}>
                                        <Button buttonName={"Edit"}></Button>
                                    </Link>
                                    <Link to="/tickets" onClick={() => onDelete(user._id)}>
                                        <Button buttonName={"Delete"}></Button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>,
                    // set the portal element to the portalRef
                    portalRef
                )
                : null}
        </div >

        , document.body);
}

export default ModalEditUser;