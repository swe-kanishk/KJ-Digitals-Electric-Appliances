import React from "react";
import ProductCard from "./ProductCard";

function CategoryCard({ categorizedProducts, setProducts, setSelected, category }) {
    console.log(categorizedProducts)
  return (
    <div onClick={() => {setProducts(categorizedProducts[category]), setSelected('All items')}} className="flex gap-4 flex-wrap h-12 w-12 bg-green-400">
      
    </div>
  );
}

export default CategoryCard;
