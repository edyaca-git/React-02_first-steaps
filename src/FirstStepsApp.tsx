import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 5 },
  { productName: "Super Massh", quantity: 2 },
];


export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
      /* <ItemCounter name = "Nintendo Switch 2" quantity = {10} />
      <ItemCounter name = "Pro Controller" quantity = {5} />
      <ItemCounter name = "Super Massh" quantity = {2} /> */
        itemsInCart.map((item) => (
            <ItemCounter key = {item.productName} name = {item.productName} quantity = {item.quantity} />
        ))
    }
    </>
  );
}
