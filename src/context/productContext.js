import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";
const API = "https://sheetdb.io/api/v1/xa7xtlb9vinit"

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      console.log("here");
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };









// import { createContext, useContext, useEffect, useReducer } from "react";
// import reducer from "../Reducer/productReducer";
// import premiumImage from "../assets/premium.jpg";
// import WalnutsImage from "../assets/walnaut.jpg";
// import AlmondImage from "../assets/almond.jpg";
// import ResinsImage from "../assets/resins.jpg";
// import DriedFigsImage from "../assets/driedfigs.jpg";
// import TrailMixImage from "../assets/trailmixrecipe.jpg";
// import RoastedChickpeasImage from "../assets/RoastedChickpeas.jpg";
// import PistaImage from "../assets/pista.jpg";
// import FlavoredHoneyCashewImage from "../assets/Honey-Roasted-Cashews.jpg";
// import DatesImage from "../assets/date.jpg";
// import DryFruitsHamper from "../assets/hamper.jpg";
// import GranolaBars from "../assets/Granola-Bars.jpg";

// const AppContext = createContext();

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   singleProduct: {},
// };

// // Shared colors (total of 5 unique colors)
// const sharedColors = ["#FFF8DC", "#D2B48C", "#8B4513", "#FFD700", "#98FB98"];

// // Hardcoded product data
// const hardcodedProducts = [
//   // Dry Fruits
//   {
//     id: "product1",
//     name: "Premium Cashews",
//     featured: true,
//     company: "HealthyBites",
//     price: 150000,
//     colors: sharedColors,
//     // image: "premium.jpg",
//     image: premiumImage,
//     description: "High-quality premium cashews with a rich taste.",
//     category: "dry fruits",
//     shipping: true,
//   },
//   {
//     id: "product2",
//     name: "Organic Almonds",
//     featured: false,
//     company: "NuttyDelight",
//     price: 120000,
//     colors: sharedColors,
//     image: AlmondImage,
//     description: "Fresh organic almonds packed with nutrients.",
//     category: "nuts",
//     shipping: true,
//   },
//   {
//     id: "product3",
//     name: "Natural Walnuts",
//     featured: true,
//     company: "Nature's Basket",
//     price: 170000,
//     colors: sharedColors,
//     image: WalnutsImage,
//     description: "Rich and crunchy walnuts full of omega-3s.",
//     category: "nuts",
//     shipping: false,
//   },
//   {
//     id: "product4",
//     name: "Dried Figs",
//     featured: false,
//     company: "Fruit Harvest",
//     price: 140000,
//     colors: sharedColors,
//     image: DriedFigsImage,
//     description: "Sweet and chewy dried figs perfect for snacking.",
//     category: "dry fruits",
//     shipping: true,
//   },

//   // Cashew Variants
//   {
//     id: "product5",
//     name: "Dry-Dates",
//     featured: true,
//     company: "CrunchyDelight",
//     price: 160000,
//     colors: sharedColors,
//     image: DatesImage,
//     description: "Lightly salted roasted cashews with a crunchy texture.",
//     category: "dry-dates",
//     shipping: true,
//   },
//   {
//     id: "product6",
//     name: "Dry Fruits Hamper",
//     featured: false,
//     company: "NuttyFlavors",
//     price: 180000,
//     colors: sharedColors,
//     image: DryFruitsHamper,
//     description: "Spicy flavored cashews for an extra zing.",
//     category: "dry fruits",
//     shipping: false,
//   },
//   {
//     id: "product7",
//     name: "Flavored Cashews - Honey Roasted",
//     featured: true,
//     company: "NuttyFlavors",
//     price: 190000,
//     colors: sharedColors,
//     image: FlavoredHoneyCashewImage,
//     description: "Sweet honey-roasted cashews for a delicious treat.",
//     category: "flavored cashews",
//     shipping: true,
//   },

//   // Snacks
//   {
//     id: "product8",
//     name: "Trail Mix",
//     featured: true,
//     company: "HealthyBites",
//     price: 160000,
//     colors: sharedColors,
//     image: TrailMixImage,
//     description: "A healthy mix of nuts, seeds, and dried fruits.",
//     category: "snacks",
//     shipping: true,
//   },
//   {
//     id: "product9",
//     name: "Granola Bars",
//     featured: false,
//     company: "NuttyDelight",
//     price: 80000,
//     colors: sharedColors,
//     image: GranolaBars,
//     description: "Crunchy granola bars for a quick energy boost.",
//     category: "snacks",
//     shipping: true,
//   },
//   {
//     id: "product10",
//     name: "Roasted Chickpeas",
//     featured: false,
//     company: "Golden Harvest",
//     price: 100000,
//     colors: sharedColors,
//     image: RoastedChickpeasImage,
//     description: "Crunchy roasted chickpeas seasoned to perfection.",
//     category: "snacks",
//     shipping: false,
//   },
//   {
//     id: "product11",
//     name: "Pistachios",
//     featured: true,
//     company: "NuttyDelight",
//     price: 180000,
//     colors: sharedColors,
//     image: PistaImage,
//     description: "Fresh pistachios with a delicious crunch.",
//     category: "nuts",
//     shipping: false,
//   },
//   {
//     id: "product12",
//     name: "Raisins",
//     featured: false,
//     company: "Golden Harvest",
//     price: 120000,
//     colors: sharedColors,
//     image: ResinsImage,
//     description: "Naturally sweet raisins for a healthy snack.",
//     category: "dry fruits",
//     shipping: true,
//   },
// ];

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Fetch all products
//   const getProducts = async () => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       // Simulating API call with hardcoded data
//       const products = hardcodedProducts;
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   // Fetch a single product by ID
//   const getSingleProduct = async (productId) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       // Simulating API call with hardcoded data
//       const singleProduct = hardcodedProducts.find((item) => item.id === productId);
//       if (singleProduct) {
       
//         dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//       } else {
//         throw new Error("Product not found");
      
//       }
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//       console.log("here");
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
