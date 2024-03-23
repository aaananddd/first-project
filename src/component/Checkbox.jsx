import React, { useState } from "react";
import LikeButton from "./UI/LikeButton";

const Checkbox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };
  return (
    <div className="flex justify-center items-center m-6">
      <div className="border-2 p-8  border-red-500">
        <label>
          <LikeButton checked={liked} handleChange={handleChange} />
        </label>
        <p>You {liked ? "liked" : "did not like"} this.</p>
      </div>
    </div>
  );
};

export default Checkbox;
