import { useState } from "react";
import { getRandomColor } from "../helpers/getRandomColor";

function Header() {
  const [randomColors, setRandomColors] = useState({
    backgroundColor: getRandomColor(),
    color: getRandomColor(),
  });

  const changeColors = () => {
    setRandomColors({
      backgroundColor: getRandomColor(),
      color: getRandomColor(),
    });
  };

  return (
    <section
      id="author-info"
      style={{
        backgroundColor: randomColors.backgroundColor,
        color: randomColors.color,
        cursor: "pointer",
      }}
      onClick={changeColors}
    >
      <h2>Сидоренко Олександра Сергіївна</h2>
      <p>Народилась 29 березня 2004 року в м. Херсон</p>
      <p>
        Закінчила Херсонський фізико-технічний ліцей. Зараз навчаюсь в НТУУ КПІ,
        м. Київ.
      </p>
    </section>
  );
}

export default Header;
