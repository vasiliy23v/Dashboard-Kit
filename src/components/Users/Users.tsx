import React, { useEffect, useState } from "react";
import api from "../../api";
import Pagination from "../Pagination/Pagination";
import User from "../User/User";
import { paginate } from "../../utils/paginate";
import GroupList from "../GroupList/GroupList";
import { fetchAllUsers } from "../../api/users"
import { Priority, User as UserType } from "../../api/types"
import { fetchAllPriority } from "../../api/fake.api/priority"
import { Priority as PriorityType } from "../../api/types"
import _ from "lodash";
import AddUser from "../AddUser/AddUser";
const Users = () => {

  const [currentPage, setCurrentPage] = useState(1);
  let [users, setUsers] = useState<Array<UserType>>([]);
  const [selectedPriority, setSelectedPriority] = useState<UserType['priority']>();
  const [priority, setPriority] = useState(fetchAllPriority());
  const [visibilityFilter, setVisibilityFilter] = useState<Boolean>(false)
  const [sortBy, setSortBy] = useState<{ iter: string, order: 'desc' | 'asc' | boolean }>({ iter: "name", order: "asc" });
  const [isOpenAdd, setOpenAdd] = React.useState(false);
  const createNewUser = () => {
    // const newUser = {
    //   _id: "1",
    //   name: "Test add new user",
    //   email: "mandeep.walton@gmail.com",
    //   address: "asdasdas",
    //   created: "May 26, 2019",
    //   image: "https://picsum.photos/id/2/200/300",
    //   priority: { name: "Normal", color: "blue" },
    //   rate: 2.5,
    // };
    // setUsers([...users, newUser])
    setOpenAdd(true)

    // localStorage.setItem("users", JSON.stringify([...users, newUser]));
  };

  const pageSize = 8;
  const filteredUsers = selectedPriority && selectedPriority.color ? users.filter((user) => user.priority.color === selectedPriority.color) : users
  let countUsers = users.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])
  let userCrop = paginate(sortedUsers, currentPage, pageSize);

  // const [userCrop, setUserCrop] = useState<Array<UserType>> (
  //   paginate(users, currentPage, pageSize)
  //  );
  //console.log("fetchAllPriority()", fetchAllPriority());

  useEffect(() => {
    fetchAllUsers().then(result => setUsers(result));
  }, [])
  useEffect(() => {
    fetchAllUsers().then(result => setUsers(result));
    setPriority(Object.assign(priority, { allPriority: { name: "Reset" } }))
    //fetchAllUsers().then(result => setUserCrop(result));
    // setUserCrop(paginate(users, currentPage, pageSize))

  }, [])

  // 
  //console.log("users", users);
  //const usersFromLS = localStorage.getItem("users");



  /*Handle edit */
  const handleDelete = (userId: string) => {
    setUsers((users.filter((user) => user._id !== userId)))
    handlePageChange(1)
  }
  const handleAddUser = (user: any) => {
    console.log("USER", user);

    const _id = (users.length + 1)
    setUsers([...users, { _id, ...user }])
    // setUsers(users = [...users, { id, ...user }])
  }
  const handleEditUser = (myUser: any, userId: any): void => {
    let newUsers = [...users]
    newUsers[userId - 1] = myUser
    setUsers(newUsers)
    // const _id = myUser._id

    // console.log("user", user);
    // setUsers((users.filter((user) => user._id !== _id)))

  };
  const handlePageChange = (pageIndex: number): void => {
    setCurrentPage(pageIndex);
  };


  const handlePrioritySelect = (params: { name: string, color: string }) => {
    console.log(params);

    if (params) {
      setSelectedPriority(params)
    }
  };
  const handleSort = (item: string) => {
    if (sortBy.iter === item) {
      setSortBy((prevState) => ({ ...prevState, order: prevState.order === "asc" ? "desc" : "asc" }))
    } else {
      setSortBy({ iter: item, order: "asc" })
    }

  }



  // useEffect(() => {

  //   setUserCrop(() =>
  //         paginate(users, currentPage, pageSize)
  //       );

  //   // console.log(userCrop);
  // }, [users]);
  // useEffect(() => {
  //   const usersConfig = api.users.fetchAll();
  //   if (usersFromLS) {
  //     setUsers(() => JSON.parse(usersFromLS));
  //     setUserCrop(() =>
  //       paginate(JSON.parse(usersFromLS), currentPage, pageSize)
  //     );
  //     console.log("userCrop1", userCrop);
  //     console.log(pageSize);
  //   } else {
  //     usersConfig.then((data) => {
  //       console.log("data", data);
  //       localStorage.setItem("users", JSON.stringify(data));
  //       setUserCrop(() =>
  //         paginate(JSON.stringify(data), currentPage, pageSize)
  //       );
  //       console.log(pageSize);
  //     });
  //   }
  // }, [usersFromLS]);

  return (
    <>

      {userCrop.length !== 0 ? <div className="table">

        {countUsers > 0 && (
          <table>

            <thead>
              <tr>
                <td className="top" colSpan={4}>
                  <div>
                    <a>Sort</a>
                    <a onClick={() => setVisibilityFilter(!visibilityFilter)}>Filter</a>
                    {visibilityFilter && <GroupList items={priority} selectedItem={selectedPriority} onItemSelect={handlePrioritySelect} />}
                    {//onItemSelect={handlePrioritySelect}
                    }
                  </div>
                </td>
                <td className="top" colSpan={2}>
                  <button onClick={createNewUser}>+ Add contact</button>
                  <AddUser isOpen={isOpenAdd} setOpen={setOpenAdd} users={users} handleAddUser={handleAddUser} user={users[0]} onDelete={handleDelete} handleEditUser={handleEditUser} />
                </td>
              </tr>
              <tr>
                <th onClick={() => handleSort("name")} scope="col">Name</th>
                <th scope="col"></th>
                <th onClick={() => handleSort("email")} scope="col">Email</th>
                <th onClick={() => handleSort("address")} scope="col">Address</th>
                <th onClick={() => handleSort("createdAt")} scope="col">Created at </th>
                <th onClick={() => handleSort("priority")} scope="col">Priority</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {userCrop.map((user) => (
                <User key={user._id} user={user} users={users} onDelete={handleDelete} handleAddUser={handleAddUser} handleEditUser={handleEditUser} />
              ))}
            </tbody>
          </table>
        )}
        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          usersLength={countUsers}
        />
      </div> : <h4 style={{
        color: "red"
      }}>Error : There are no users</h4>}

    </>
  );
};

export default Users;
