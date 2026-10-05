import headphones from "../assets/products/headphones.jpg";
import watch from "../assets/products/watch.jpg";
import shoes from "../assets/products/shoes.jpg";
import backpack from "../assets/products/backpack.jpg";
import sunglasses from "../assets/products/sunglasses.jpg";
import shirt from "../assets/products/shirt.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    category: "Electronics",
    image: headphones,
    description:
      "Comfortable wireless headphones with clear sound and a long-lasting battery."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    category: "Electronics",
    image: watch,
    description:
      "A stylish smart watch for tracking your daily activities and notifications."
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    image: shoes,
    description:
      "Lightweight running shoes designed for everyday comfort."
  },
  {
    id: 4,
    name: "Backpack",
    price: 1299,
    category: "Accessories",
    image: backpack,
    description:
      "A practical backpack suitable for college, travel and everyday use."
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 999,
    category: "Accessories",
    image: sunglasses,
    description:
      "Classic sunglasses with a simple and stylish design."
  },
  {
    id: 6,
    name: "Casual Shirt",
    price: 899,
    category: "Fashion",
    image: shirt,
    description:
      "A comfortable casual shirt for everyday wear."
  }
];

export default products;