import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        // Fetch user data from the server
        // Replace the URL and headers with your API endpoint and authentication logic
        fetch("http://localhost:8000/user/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
            },
        })
            .then((res) => res.json())
            .then((data) => setUserList(data))
            .catch((error) => console.error("Error fetching user data:", error));
    }, []);

    const handleEdit = (userId) => {
        // Redirect to the edit page with the userId as a parameter
        navigate(`/edit-user/${userId}`);
    };

    const handleDelete = (userId) => {
        // Perform the delete operation on the server
        // After a successful deletion, update the user list
        fetch(`http://localhost:8000/user/${userId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
            },
        })
            .then(() => {
                setUserList((prevUsers) => prevUsers.filter((user) => user.id !== userId));
            })
            .catch((error) => console.error("Error deleting user:", error));
    };

   
    return (
        <div>
            <h1 className="text-center" style={{ textAlign: 'center', marginTop: '30px', marginBottom: '40px' }}>User Management</h1>
            <table className="table table-bordered table-striped text-center" style={{ marginLeft: '160px', maxWidth: '80%' }}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)} className="btn btn-primary btn-sm">Edit</button>
                                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm" style={{ marginLeft: '1%' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/Countries">
                <div style={{ textAlign: "center" }}>
                <button>List Country</button>
                </div>
            </Link>

        </div>
    );
};

export default Home;
