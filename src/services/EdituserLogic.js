import { toast } from "react-toastify";

const EdituserLogic = {
    handleEdituserLogic: (userId, editedUser, navigate) => {
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
      },
};

export default EdituserLogic;