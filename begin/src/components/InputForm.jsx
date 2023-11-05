/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const InputForm = ({ addUser }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    position: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.name || !userInput.position || !userInput.image) {
      toast.error("Please fill in all fields");
      return;
    }
    addUser(userInput.name, userInput.image, userInput.position);
    toast.success("Member added successfully");
    setUserInput({
      name: "",
      position: "",
      image: "",
    });
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Enter a New Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userInput.name}
            onChange={(e) =>
              setUserInput({ ...userInput, name: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={userInput.position}
            onChange={(e) =>
              setUserInput({ ...userInput, position: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control mb-3"
            id="image"
            value={userInput.image}
            onChange={(e) =>
              setUserInput({ ...userInput, image: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default InputForm;
