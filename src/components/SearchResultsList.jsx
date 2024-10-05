import { useEffect, useState } from "react";
import "./SearchResultsList.css";

export const SearchResultsList = ({ products, searchProductsHandler, searchProducts, setSearchProducts }) => {
  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    setClicked(false)
  }, [searchProducts])

  const handleSetClick= () => {
    setTimeout(() => {
      setClicked(true)
    })
  }
  return (
    <ul className={`${clicked ? 'hidden' : 'flex'} results-list absolute py-2 px-3 z-50 gap-1 max-h-[300px] overflow-y-scroll w-full top-[2rem] left-0 bg-[#ffb68b]`}>
      {uniqueCategories.map((category, index) => (
        <li key={index} onClick={() => {searchProductsHandler(category), setClicked(handleSetClick()), setSearchProducts(category)}} className="category-item font-medium py-1 rounded-lg px-2 hover:bg-white">
          {category}
        </li>
      ))}
    </ul>
  );
};
