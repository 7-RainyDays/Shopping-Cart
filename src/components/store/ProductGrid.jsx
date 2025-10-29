import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import classes from "./Store.module.css";

export default function ProductGrid({ setCartItems }) {
  const [shopItems, setShopItems] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const items = json.map((item) => item);
        setShopItems(items);
      });
  }, []);

  return (
    <div className={classes.productGrid}>
      {shopItems.map((item) => {
        return (
          <ProductCard key={item.id} item={item} setCartItems={setCartItems} />
        );
      })}
    </div>
  );
}
