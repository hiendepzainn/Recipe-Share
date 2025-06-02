import { useRef } from "react";

var Modal = ({ isShowModal, setIsShowModal }) => {
  var closeModal = () => {
    setIsShowModal(false);
  };

  var handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name: e.target[0].value,
      difficulty: e.target[1].value,
      cookTimeMinutes: e.target[2].value,
      cuisine: e.target[3].value,
      image: e.target[4].value,
      rating: e.target[5].value,
      reviewCount: e.target[6].value,
    };

    addNewRecipe(newRecipe);
    setIsShowModal(false);

    alert("Tạo món mới thành công!");

    console.log(newRecipe);
  };

  const titleRef = useRef(null);
  const difficultyRef = useRef(null);
  const cookTimeRef = useRef(null);
  const cuisineRef = useRef(null);
  const imageLinkRef = useRef(null);
  const ratingRef = useRef(null);
  const reviewCountRef = useRef(null);

  const addNewRecipe = (item) => {
    console.log(item);
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("Đã thêm", response);
      });
  };
  return (
    <>
      {isShowModal ? (
        <div className="outer-modal">
          <div className="modal">
            <h2>Tạo mới món ăn</h2>
            <form onSubmit={handleSubmit}>
              <table>
                <thead>
                  <tr>
                    <td>Tên món</td>
                    <td>
                      <input ref={titleRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>Độ khó</td>
                    <td>
                      <select ref={difficultyRef}>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Thời gian nấu (phút)"}</td>
                    <td>
                      <input ref={cookTimeRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>Cuisine</td>
                    <td>
                      <input ref={cuisineRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>Link ảnh</td>
                    <td>
                      <input ref={imageLinkRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>Rate</td>
                    <td>
                      <input ref={ratingRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>Số người review</td>
                    <td>
                      <input ref={reviewCountRef} required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={closeModal}>Hủy</button>
                    </td>
                    <td>
                      <button type="submit">Tạo mới</button>
                    </td>
                  </tr>
                </thead>
              </table>
            </form>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Modal;
