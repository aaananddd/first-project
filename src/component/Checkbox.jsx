import React, { useState } from "react";

const Checkbox = () => {
  const [liked, setLiked] = useState(true);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I Liked
        This
      </label>
      <p>You{liked ? "liked" : "did not like"}this.</p>
    </div>
  );
};

export default Checkbox;
