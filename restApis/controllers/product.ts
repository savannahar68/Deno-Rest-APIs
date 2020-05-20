import { Product } from "../types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Product One",
    description: "This is product one",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product Two",
    description: "This is product two",
    price: 39.99,
  },
  {
    id: "3",
    name: "Product Three",
    description: "This is product three",
    price: 59.99,
  },
];

// @desc : Get all products
// @route  GET /api/v1/products

const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    date: products,
  };
};

export { getProducts };
