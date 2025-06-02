import { RiErrorWarningLine } from "react-icons/ri";

var ModalDelete = ({ data, showDeleteModal, setShowDeleteModal }) => {
  var cancleDeleteModal = () => {
    setShowDeleteModal({ isShow: false, id: 0 });
  };

  var deleteRecipe = (id) => {
    let recipeName = data.find((item) => item.id === id).name;
    fetch(`http://localhost:3001/recipes/${id}`, { method: "DELETE" }).then(
      (response) => {
        setShowDeleteModal({ isShow: false, id: 0 });
        console.log(recipeName);
        alert(`Đã xóa sản phẩm: ${recipeName}`);
      }
    );
  };

  return (
    <>
      {showDeleteModal.isShow ? (
        <div className="outer-modal-delete">
          <div className="modal-delete">
            <RiErrorWarningLine className="icon-warning" />
            <h1>Bạn có chắc muốn xóa?</h1>
            <h3>
              Sản phẩm bạn chuẩn bị xóa là:{" "}
              <b>
                <i>
                  {data.find((item) => item.id === showDeleteModal.id).name}
                </i>
              </b>
            </h3>
            <div className="button-area">
              <button
                onClick={() => {
                  deleteRecipe(showDeleteModal.id);
                }}
                className="delete-button"
              >
                Vẫn xóa!
              </button>
              <button onClick={cancleDeleteModal} className="cancle-button">
                Hủy
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ModalDelete;
