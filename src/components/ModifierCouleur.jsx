import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../store/userSlice";

const ModifierCouleur = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(user.couleur);

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    dispatch(changeColor(e.target.value));
  };

  return (
    <div>
      <label htmlFor="color">Changer la couleur préférée:</label>
      <select
        id="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ margin: "10px", padding: "5px" }}
      >
        <option value="red">Rouge</option>
        <option value="blue">Bleu</option>
        <option value="green">Vert</option>
        <option value="yellow">Jaune</option>
        <option value="purple">Violet</option>
      </select>
      {user.age < 15 && !user.admin && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Les visiteurs de moins de 15 ans ne peuvent pas modifier les couleurs.
        </p>
      )}
    </div>
  );
};

export default ModifierCouleur;
