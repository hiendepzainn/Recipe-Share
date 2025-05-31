import { FaStar } from "react-icons/fa6";

var RecipesList = ({ data }) => {
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
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default RecipesList;
