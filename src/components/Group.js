import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const groupDetails = [
  {
    id: 1,
    userImage: img1,
    userName: "Leisure",
    isFollow: false,
  },
  {
    id: 2,
    userImage: img2,
    userName: "Activism",
    isFollow: false,
  },
  {
    id: 3,
    userImage: img3,
    userName: "MBA",
    isFollow: false,
  },
  {
    id: 4,
    userImage: img4,
    userName: "Philosophy",
    isFollow: false,
  },
];

function App() {
  const [data, setData] = useState(groupDetails);

  const handleUpdate = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isFollow: !item.isFollow };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div>
      {data.map((item) => (
        <div className="d-flex justify-content-between mb-3" key={item.id}>
          <div className="d-flex gap-2">
            <img src={item.userImage} alt={item.userName} />
            <p className="fs-7 my-auto">{item.userName}</p>
          </div>
          <div>
            {!item.isFollow ? (
              <button
                className="btn btn-light rounded-pill fs-7 fw-bold"
                onClick={() => handleUpdate(item.id)}
              >
                Follow
              </button>
            ) : (
              <button
                className="btn btn-dark rounded-pill fs-7 fw-bold"
                onClick={() => handleUpdate(item.id)}
              >
                Followed
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
