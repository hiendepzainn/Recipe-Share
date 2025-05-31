import { useEffect, useState } from "react";
import "./HomePage.css";
import RecipesList from "./RecipesList";
import Modal from "./Modal";
var HomePage = () => {
  const [data, setData] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  var openModal = () => {
    setIsShowModal(true);
  };

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [isShowModal]);
  return (
    <>
      <h1>Menu món ăn</h1>
      <button onClick={openModal}>+ Tạo món ăn mới</button>
      <RecipesList data={data} />
      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </>
  );
};

export default HomePage;
