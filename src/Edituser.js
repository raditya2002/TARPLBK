import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css"; // Menggunakan style dari Register.css

const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch user data based on userId from the server
    // Replace the URL and headers with your API endpoint and authentication logic
    fetch(`http://localhost:8000/user/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.id);
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    let editedUser = { id, name, password, email };

    // Perform the edit operation on the server
    // After a successful edit, navigate back to the home page
    fetch(`http://localhost:8000/user/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem("jwttoken"),
      },
      body: JSON.stringify(editedUser),
    })
      .then(() => {
        toast.success("User edited successfully.");
        navigate("/");
      })
      .catch((error) => console.error("Error editing user:", error));
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-header">Edit User</h1>
        <form onSubmit={handleEditSubmit}>
          <div className="register-group">
            <label htmlFor="id">User Name</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="form-control"
              readOnly
            />
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="register-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="register-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
