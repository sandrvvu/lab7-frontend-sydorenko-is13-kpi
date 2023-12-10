import { useState } from "react";

function Image() {
  const [imageVisible, setImageVisible] = useState(true);
  const [imageWidth, setImageWidth] = useState(800);

  const addImage = () => {
    setImageVisible(true);
  };

  const increaseImageSize = () => {
    setImageWidth((prevWidth) => prevWidth + 50);
  };

  const decreaseImageSize = () => {
    if (imageWidth > 50) {
      setImageWidth((prevWidth) => prevWidth - 50);
    }
  };

  const deleteImage = () => {
    setImageVisible(false);
  };

  return (
    <>
      {imageVisible && (
        <img
          width={imageWidth}
          id="city-img"
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="barcelona"
        />
      )}
      <br />
      <a href="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        Посилання на зображення з Unsplash
      </a>
      <div id="image-controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImageSize}>Збільшити</button>
        <button onClick={decreaseImageSize}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </>
  );
}

export default Image;
