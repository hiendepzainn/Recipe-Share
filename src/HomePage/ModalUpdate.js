import { useEffect, useState } from "react";

var ModalUpdate = ({ data, showUpdateModal, setShowUpdateModal }) => {
  const [nameValue, setNameValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");
  const [cookTimeValue, setCookTimeValue] = useState("");
  const [cuisineValue, setCuisineValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [reviewCountValue, setReviewCountValue] = useState("");
  useEffect(() => {
    if (showUpdateModal.id !== 0) {
      setNameValue(data.find((item) => item.id === showUpdateModal.id).name);
      setDifficultyValue(
        data.find((item) => item.id === showUpdateModal.id).difficulty
      );
      setCookTimeValue(
        data.find((item) => item.id === showUpdateModal.id).cookTimeMinutes
      );
      setCuisineValue(
        data.find((item) => item.id === showUpdateModal.id).cuisine
      );
      setImageValue(data.find((item) => item.id === showUpdateModal.id).image);
      setRatingValue(
        data.find((item) => item.id === showUpdateModal.id).rating
      );
      setReviewCountValue(
        data.find((item) => item.id === showUpdateModal.id).reviewCount
      );
    }
  }, [showUpdateModal]);

  var cancleUpdate = () => {
    setShowUpdateModal({ isShow: false, id: 0 });
  };

  var handleUpdate = (e) => {
    e.preventDefault();
    const newObject = {
      name: nameValue,
      difficulty: difficultyValue,
      cookTimeMinutes: cookTimeValue,
      cuisine: cuisineValue,
      image: imageValue,
      rating: ratingValue,
      reviewCount: reviewCountValue,
    };
    patchRecipe(newObject);
    setShowUpdateModal({ isShow: false, id: 0 });

    alert("Cập nhật món ăn thành công!");
  };

  var patchRecipe = (item) => {
    fetch(`http://localhost:3001/recipes/${showUpdateModal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
  };

  return (
    <>
      {showUpdateModal.isShow ? (
        <div className="outer-modal">
          <div className="modal">
            <h2>Cập nhật món ăn</h2>
            <form onSubmit={handleUpdate}>
              <table>
                <thead>
                  <tr>
                    <td>Tên món</td>
                    <td>
                      <input
                        value={nameValue}
                        onChange={(e) => {
                          setNameValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Độ khó</td>
                    <td>
                      <select
                        value={difficultyValue}
                        onChange={(e) => {
                          setDifficultyValue(e.target.value);
                        }}
                      >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>{"Thời gian nấu (phút)"}</td>
                    <td>
                      <input
                        value={cookTimeValue}
                        onChange={(e) => {
                          setCookTimeValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Cuisine</td>
                    <td>
                      <input
                        value={cuisineValue}
                        onChange={(e) => {
                          setCuisineValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Link ảnh</td>
                    <td>
                      <input
                        value={imageValue}
                        onChange={(e) => {
                          setImageValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Rate</td>
                    <td>
                      <input
                        value={ratingValue}
                        onChange={(e) => {
                          setRatingValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Số người review</td>
                    <td>
                      <input
                        value={reviewCountValue}
                        onChange={(e) => {
                          setReviewCountValue(e.target.value);
                        }}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={cancleUpdate}>Hủy</button>
                    </td>
                    <td>
                      <button type="submit">Cập nhật</button>
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

export default ModalUpdate;
