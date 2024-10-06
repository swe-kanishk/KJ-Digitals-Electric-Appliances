import React, { useState, useEffect, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { productData } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CategoryCard from "../components/CategoryCard.jsx";
import Success from "../components/Success.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import { CategoriesContext } from "../components/MainLayout.jsx";
import { GiWashingMachine } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbAirConditioning } from "react-icons/tb";
import { TbMicrowaveFilled } from "react-icons/tb";
import { GiChimney } from "react-icons/gi";
import { FaTv } from "react-icons/fa";
import tableFan from '../../public/home.png'
import ceilingFan from '../../public/ceiling.png'

gsap.registerPlugin(ScrollTrigger);

function Products() {
  const { selectedCategories, setSelectedCategories } = useContext(CategoriesContext);

  const [open, setIsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [products, setProducts] = useState(productData);
  const [categorizedProducts, setCategorizedProducts] = useState({});
  const [buyingProduct, setBuyingProduct] = useState(null);
  const [success, setSuccess] = useState(false);
  const [searchProducts, setSearchProducts] = useState("");
  const [email, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState('')

  const setIcon = (category) => {
    switch (category) {
      case "washing_machine":
        return <GiWashingMachine size={'20px'} />;

      case "fridge":
        return <CgSmartHomeRefrigerator size={'20px'} />;

      case "Ac":
        return <TbAirConditioning size={'20px'} />;

      case "Microwave":
        return <TbMicrowaveFilled size={'20px'} />;

      case "Chimney":
        return <GiChimney size={'20px'} />;

      case "ceilling-fan":
        return (
          <img className="h-[20px] opacity-60" src={ceilingFan} alt="ceiling fan" />
        
        );

      case "television":
        return <FaTv size={'20px'} />;

      case "table-fan":
        return (
          <img className="h-[20px] opacity-60" src={tableFan} alt="table fan" />
        );
    }
  };

  // Categorize products by category
  useEffect(() => {
    const categories = {};
    productData.forEach((product) => {
      const { category } = product;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(product);
    });
    setCategorizedProducts(categories);
  }, []);

  if(selectedCategories) {
    useEffect(() => {
      const selectedProductsCategory = productData.filter((product) => {
        return (
          product.category.toLowerCase() === selectedCategories.toLowerCase()
        );
      });
      setProducts(selectedProductsCategory);
    }, [selectedCategories]);
  }

  const searchProductsHandler = (searchItem) => {
    const allSearchProducts = productData.filter((item) => {
      const newItem = JSON.stringify(item);
      return newItem.toLowerCase().includes(searchItem.toLowerCase());
    });
    setProducts(allSearchProducts);
    setActiveCategory(allSearchProducts[0].category)
  };

  function onSubmit(e) {
    e.preventDefault();
    fetch("https://formcarry.com/s/X4QKpNgXeNa", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: customerName,
        email,
        buyingProduct: JSON.stringify({
          productId: buyingProduct.id,
          brand: buyingProduct.brand,
          product_name: buyingProduct.product_name,
          product_detail: buyingProduct.product_detail,
          category: buyingProduct.category,
        }),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSuccess(true); // Changed to set success to true
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message || error);
      })
      .finally(() => {
        setFormOpen(false);
        setBuyingProduct(null);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      });
  }

  return (
    <>
      {success && <Success />}
      <div className={`w-full bg-white flex flex-col gap-20 pb-6 items-center justify-center relative ${open ? 'pt-[10rem]' : 'pt-[10vh]'}`}>
        <div
          className={`bg-white py-1 px-3 text-black overflow-x-hidden shadow-md max-w-[1599px] shadow-gray-500 w-full text-center  hover:text-white overflow-y-scroll ${
            open ? "flex fixed top-[65px] pt-3 z-20" : "hidden"
          } rounded-l-lg font-medium`}
        >
          <ul className="flex w-full items-center justify-evenly pb-2 overflow-x-scroll gap-4">
            {Object.keys(categorizedProducts).map((category) => (
              <li
                key={category}
                onClick={() => {
                  setProducts(categorizedProducts[category]);
                  setActiveCategory(category)
                }}
      
                className={`hover:bg-gray-800 rounded-lg flex gap-2 items-center hover:text-white text-gray-500 min-w-fit px-3 py-2 ${activeCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
              >
                <div>{setIcon(category)}</div>
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center px-3 flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="animated-heading text-3xl">POPULAR PRO STOCKS</h1>
            <p>Search for available products</p>
          </div>
          <div className="relative">
            <div className="flex px-2 max-w-[320px] lg:w-auto overflow-hidden items-center py-2 border border-black rounded-lg">
              <div
                className="px-2 border border-black rounded font-light"
                to={`/products/`}
              >
                find
              </div>
              <div className="search-bar-container">
                <input
                  placeholder="search available items"
                  className="outline-none mx-2 px-2"
                  type="text"
                  value={searchProducts}
                  onChange={(e) => {
                    setSearchProducts(e.target.value);
                    searchProductsHandler(e.target.value);
                  }}
                  autoFocus
                />
                {searchProducts && (
                  <SearchResultsList
                    products={products}
                    setSearchProducts={setSearchProducts}
                    searchProductsHandler={searchProductsHandler}
                    searchProducts={searchProducts}
                  />
                )}
              </div>
              <button className="px-2">
                <IoSearch size={"22px"} />
              </button>
            </div>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(!open)}
          className="bg-[#ff6201] z-30 h-12 w-12 fixed bottom-20 shadow-md shadow-black cursor-pointer right-6 rounded-full text-white flex items-center justify-center"
        >
          <FaFilter
            size={"22px"}
            onClick={() => setIsOpen(!open)}
            className="relative top-1"
          />
        </div>

        <div className="xl:grid xl:grid-cols-4 gap-8 flex justify-center flex-wrap px-6">
          {products.map((product, index) => {
            const isOdd = index % 2 !== 0; // Calculate whether the index is odd
            return (
              <ProductCard
                key={product.id}
                product={product}
                setBuyingProduct={setBuyingProduct}
                setFormOpen={setFormOpen}
                formOpen={formOpen}
                isOdd={isOdd}
              />
            );
          })}
        </div>

        <form
          onSubmit={onSubmit}
          className={`${
            formOpen ? "flex" : "hidden"
          } bg-white px-3 fixed items-center justify-center inset-0`}
        >
          <div className="flex h-fit md:h-[500px] pt-8 flex-1 border-black rounded-lg border">
            <div className="w-full flex-1 mx-auto px-6 py-3 flex flex-col justify-center">
              <h1 className="text-3xl font-medium">Contact us</h1>
              <p className="text-gray-500">
                <span className="hidden lg:inline">
                  Feel free to contact us any time!
                </span>{" "}
                we will get back to you as soon as we can!
              </p>
              <div className="flex flex-col gap-4 px-3 py-6">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="border-b border-gray-200 md:w-1/2 outline-none"
                  id="name"
                  placeholder="Your first and last name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-gray-200 md:w-1/2 outline-none"
                  id="email"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="w-full mx-auto flex py-2 items-center justify-center">
                <button
                  type="submit"
                  className="bg-black px-3 py-1 text-white rounded text-lg"
                >
                  Buy now!
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Products;
