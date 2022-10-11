import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { UserPropsFully } from "../../api/types";
import Button from "../Button/Button";
import Description from "../Description/Descripton";
import { usePortal } from "../usePortal/usePortal";
import { ModalAdd as arrForm } from "../../pages/Registration/modalConfig"
import { priority } from "../../api/fake.api/priority";
const AddUser = ({ isOpen, setOpen, user, users, onDelete, handleAddUser }: UserPropsFully) => {
    const deleteUserFunction = () => {
        onDelete(user._id)
        setOpen(false)
    }


    const [defaultUser, setDefaultUser] = useState(
        {
            _id: users.length + 1,
            name: "",
            email: "",
            address: "",
            created: (new Date().toISOString().split('T')[0]),
            image: "https://picsum.photos/id/1000/300/300",
            priority: priority.low,
            rate: 0
        },
    );
    const addUserFunction = (userrrrr: any) => {
        console.log("defaultUser", userrrrr);

        handleAddUser(userrrrr)
        setOpen(false)
    }

    const portalRef = usePortal("modal");


    return ReactDOM.createPortal(
        isOpen &&

        <div>
            {
                // Use react-dom to create a portal
                portalRef &&
                ReactDOM.createPortal(
                    // <div style={{ width: "100%" }}>
                    //     <h1>Hello from the modal!</h1>

                    //     <button onClick={() => setOpen(false)}>Close modal</button>
                    // </div>,

                    <div className='modal' onClick={() => setOpen(false)} style={{ top: "0" }}>
                        <div className='modal-content' onClick={(e) => e.stopPropagation()}>

                            {arrForm.headingForm.map(
                                (form) =>
                                    form && <Description key={form.h2} h2={form.h2} h3={form.h3} />
                            )}

                            {/* {
        _id: "1",
        name: "A Mandeep Walton",
        email: "skdfjsd.ds@gmail.com",
        address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate,B98 9PA",
        created: "May 26, 2019",
        image: "https://picsum.photos/id/1/200/300",
        priority: priority.high,
        rate: 2.5
    }, */}
                            <form className="form">

                                <label className="form-label" >
                                    <span><img src={defaultUser.image} alt="userPhoto" style={{ width: "100px", height: "100px", borderRadius: "50px" }} /></span>
                                    <span>Link on new Image</span>
                                    <div className="form-label-box">
                                        <input
                                            defaultValue={defaultUser.image}
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
                                                    return <option value={e}
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
                                    <Link to="/tickets" onClick={() => addUserFunction({
                                        _id: users.length + 1,
                                        name: defaultUser.name,
                                        email: defaultUser.email,
                                        address: defaultUser.address,
                                        created: defaultUser.created,
                                        image: defaultUser.image,
                                        priority: defaultUser.priority,
                                        rate: defaultUser.rate
                                    })}>
                                        <Button buttonName={"Create"}></Button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>,
                    // set the portal element to the portalRef
                    portalRef
                )
            }
        </div >

        , document.body);
}

export default AddUser;