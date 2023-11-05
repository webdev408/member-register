import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import Home from "./components/Home";
import InputForm from "./components/InputForm";
import MemberList from "./components/MemberList";
import members from "./data";
import "./index.css";

const App = () => {
  const [data, setData] = useState(members);

  const addUser = (name, image, position) => {
    setData([...data, { id: data.length + 1, name, image, position }]);
  };
  const deleteData = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    toast.error("Member deleted successfully");
  };
  const editData = (id) => {
    const editedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: "Mary James",
          position: "Software Engineer",
          image: "https://randomUser.me/api/portraits/women/2.jpg",
        };
      }
      return item;
    });
    setData(editedData);
    toast.success("Member updated successfully");
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/list"
          element={
            <MemberList
              data={data}
              setData={setData}
              deleteData={deleteData}
              editData={editData}
            />
          }
        />
        <Route path="/input" element={<InputForm addUser={addUser} />} />
      </Routes>
    </>
  );
};
export default App;
