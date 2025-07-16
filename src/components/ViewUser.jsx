import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewUser = () => {
    const [userData, changeUserData]=useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                changeUserData(response.data)
            })
            .catch()
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div>
            <Nav />
            <div className="container px-2 py-4">
                <h2 className="mb-4 text-center">User List</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-primary table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
