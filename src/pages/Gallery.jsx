import GoodsCard from "../components/GoodsCard";

function Gallery() {
  let data = [
    {
      id: 1,
      name: "YSL Black Opium",
      imageSrc: "https://pwa-api.eva.ua/img/512/512/resize/5/1/513834_1.jpg",
      price: 2880,
    },
    {
      id: 2,
      name: "Carolina Herrera Good Girl",
      imageSrc:
        "https://cdn.cosmostore.org/cache/front/shop/products/597/1836236/350x350.jpg",
      price: 3878,
    },
    {
      id: 3,
      name: "Tom Ford Lost Cherry",
      imageSrc:
        "https://www.brocard.ua/media/catalog/product/147313bdff/eyJ3IjozNTAsImgiOjM1MCwibyI6ImNhdGFsb2dcL3Byb2R1Y3RcL1wvOFwvOFwvODg4MDY2MDgyMzQxXzEuanBnIn0/tom-ford-private-blend-lost-cherry.jpg",
      price: 8185,
    },
    {
      id: 4,
      name: "Valentino Donna Born In Roma Intense",
      imageSrc: "https://img.kremchik.ua/prd_pic/89/23347_f.jpg",
      price: 3389,
    },
    {
      id: 5,
      name: "Montale Vanilla Cake",
      imageSrc:
        "https://www.brocard.ua/media/catalog/product/3/7/3760260456135_1.jpg",
      price: 1685,
    },
    {
      id: 6,
      name: "Maison Francis Kurkdjian Baccarat Rouge 540",
      imageSrc: "https://sanahunt.com/storage/products/images/big/AFJ0yzXZBqwufYVVy5gjoKEJFNG50UPMakuH209M.jpg",
      price: 11831,
    },
    {
      id: 7,
      name: "Dior Miss Dior",
      imageSrc: "https://img.kremchik.ua/prd_pic/29/44033_f.jpg",
      price: 2759,
    },
    {
      id: 8,
      name: "Armani My Way",
      imageSrc:
        "https://www.brocard.ua/media/catalog/product/3/6/3614272907652_1.jpg",
      price: 3123,
    },
    {
      id: 9,
      name: "Chanel N5",
      imageSrc: "https://img.kremchik.ua/prd_pic/27/888_f.jpg",
      price: 7278,
    },
    {
      id: 10,
      name: "Parfums de Marly Delina",
      imageSrc: "https://img.kremchik.ua/prd_pic/623/46643_f.jpg",
      price: 11757,
    },
  ];
  return (
    <div>
      <h1>Gallery</h1>
      <div className="goods-gallery">
        {data.map((product) => (
          <GoodsCard
            key={product.id}
            name={product.name}
            imageSrc={product.imageSrc}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
