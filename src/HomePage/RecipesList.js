import { FaStar } from "react-icons/fa6";

var RecipesList = ({ data, setShowDeleteModal, setShowUpdateModal }) => {
  var openDeleteModal = (id) => {
    setShowDeleteModal({ isShow: true, id: id });
  };

  var openUpdateModal = (id) => {
    setShowUpdateModal({ isShow: true, id: id });
  };

  return (
    <>
      <div className="list-recipes">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="title">{item.name}</div>
            <div className="difficulty">Độ khó: {item.difficulty}</div>
            <div className="cookTime">
              Thời gian nấu: {item.cookTimeMinutes}p
            </div>
            <div className="cuisine">Cuisine: {item.cuisine}</div>
            <div className="rate-area">
              <div className="rate">
                <div className="star">
                  {item.rating}
                  <FaStar className="icon-star" />
                </div>
                <div className="review-count">
                  {"("}
                  {item.reviewCount}
                  {")"}
                </div>
              </div>
            </div>
            <div className="button-area">
              <button
                className="edit-button"
                onClick={() => {
                  openUpdateModal(item.id);
                }}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => {
                  openDeleteModal(item.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RecipesList;
