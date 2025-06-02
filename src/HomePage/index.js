import { useEffect, useState } from "react";
import "./HomePage.css";
import RecipesList from "./RecipesList";
import Modal from "./Modal";
import ModalDelete from "./ModalDelete";
import ModalUpdate from "./ModalUpdate";
var HomePage = () => {
  const [data, setData] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState({
    isShow: false,
    id: 0,
  });
  const [showUpdateModal, setShowUpdateModal] = useState({
    isShow: false,
    id: 0,
  });

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
  }, [isShowModal, showDeleteModal, showUpdateModal]);
  return (
    <>
      <h1 className="main-title">Menu món ăn</h1>
      <button className="addRecipe-button" onClick={openModal}>
        + Tạo món ăn mới
      </button>
      <RecipesList
        data={data}
        setShowDeleteModal={setShowDeleteModal}
        setShowUpdateModal={setShowUpdateModal}
      />
      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
      <ModalDelete
        data={data}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
      />
      <ModalUpdate
        data={data}
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
      />
    </>
  );
};

export default HomePage;
