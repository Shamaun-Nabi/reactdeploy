import "./App.css";
import Card from "./Card";
function App() {
  const cardData = [
    {
      name: "Nike",
      price: 200,
      des: "Nike World IS yOUR PRICE",
      imageUrl:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    },
    {
      name: "Bata",
      price: 300,
      des: "Bata World IS yOUR PRICE",
      imageUrl:
        "https://www.batabd.com/cdn/shop/products/DSC00608_grande.jpg?v=1650047546",
    },
    {
      name: "Apex",
      price: 400,
      des: "Apex World IS yOUR PRICE",
      imageUrl: "https://storage.apex4u.com/91137A69_2.jpeg",
    },
    {
      name: "Lotto",
      price: 100,
      des: "Lotto World IS yOUR PRICE",
      imageUrl:
        "https://s3.brilliant.com.bd/ehub/Images/Product/8020647/8020647_1_4da0b66c-017b-4696-8812-d6530d0b288a_.webp?x=156020141",
    },
    {
      name: "Habijabi",
      price: 100,
      des: "Lotto World IS yOUR PRICE",
      imageUrl:
        "https://s3.brilliant.com.bd/ehub/Images/Product/8020647/8020647_1_4da0b66c-017b-4696-8812-d6530d0b288a_.webp?x=156020141",
    },
    {
      name: "Habijabi",
      price: 100,
      des: "Lotto World IS yOUR PRICE",
      imageUrl:
        "https://s3.brilliant.com.bd/ehub/Images/Product/8020647/8020647_1_4da0b66c-017b-4696-8812-d6530d0b288a_.webp?x=156020141",
    },
   
  ];

  // console.log(cardData);
  return (
    <>
      <div className="flex flex-wrap  gap-2">
        {cardData.map((juta, i) => (
          <Card cardInfo={juta} key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
