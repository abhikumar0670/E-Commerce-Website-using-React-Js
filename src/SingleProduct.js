import styled from "styled-components";
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import FormatPrice from "./Helpers/FormatPrice";
import PageNavigation from "./components/PageNavigation";
//import MyImage from "./components/MyImage";
import { Container } from "./Container";
import {TbReplace, TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";



const API = "https://sheetdb.io/api/v1/v58gh3olczv6i"
// const API="http://127.0.0.1:5000/api/products/product1"
//const API="http://127.0.0.1:5000/api/products"

const SingleProduct = () => {
  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext();
  
  const {id} = useParams();
  console.log("hereeeee", singleProduct);
  const productData = singleProduct[0] || {}; // Default to empty object if array is empty
  const {
    id: productId,
    image,
    name,
    company,
    description,
    category,
    stock,
    stars,
    reviews,
    price,
  } = productData;
  console.log(name,"---",company )
  useEffect(()=>{
    console.log("api here",API,"id heree",id);
  getSingleProduct(`${API}/search?id=${id}`)
  },[])
  if(isSingleLoading){
    return <div className="page_loading">Loading.....</div>
  }
  return <Wrapper>
    <PageNavigation title={name} />
    <Container className="container">
      <div className="grid grid-two-column">
        {/* Product Image */}
        <div className="product_images">
        {/* <MyImage imgs={image} /> */}
      </div>
          {/* Product data */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p>{reviews} reviews</p>
            <p className="product-data-price ">
               MRP: 
               <del>
                <FormatPrice price={price+1}/>
               </del>
            </p>
            <p className="product-data-price product-data-real-price">
               Deal of the Day: 
                <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon"/>
                <p>15 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Product Delivered</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon"/>
                <p>3 Month Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
              <p>ID : <span> {id} </span></p>
              <p>Brand : <span> {company} </span></p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={productData}/>}
          </div>
      </div>
    </Container>
    </Wrapper>;
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images{
    display:flex;
    align-items:center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;









// import styled from "styled-components";
// import React from "react";
// import { useParams } from "react-router-dom";
// import FormatPrice from "./Helpers/FormatPrice";
// import PageNavigation from "./components/PageNavigation";
// import MyImage from "./components/MyImage";
// import { Container } from "./Container";
// import { TbReplace, TbTruckDelivery } from "react-icons/tb";
// import { MdSecurity } from "react-icons/md";
// import Star from "./components/Star";
// import AddToCart from "./components/AddToCart";

// import premiumImage from "./assets/premium.jpg";
// import WalnutsImage from "./assets/walnaut.jpg";
// import AlmondImage from "./assets/almond.jpg";
// import ResinsImage from "./assets/resins.jpg";
// import DriedFigsImage from "./assets/driedfigs.jpg";
// import TrailMixImage from "./assets/trailmixrecipe.jpg";
// import RoastedChickpeasImage from "./assets/RoastedChickpeas.jpg";
// import PistaImage from "./assets/pista.jpg";
// import FlavoredHoneyCashewImage from "./assets/Honey-Roasted-Cashews.jpg";
// import DatesImage from "./assets/date.jpg";
// import DryFruitsHamper from "./assets/hamper.jpg";
// import GranolaBars from "./assets/Granola-Bars.jpg";


// // Hardcoded Products
// const hardcodedProducts = [
//   {
//     id: "product1",
//     name: "Premium Cashews",
//     featured: true,
//     company: "HealthyBites",
//     price: 150000,
//     colors: ["#FF5733", "#33FF57", "#3357FF"],
//     image: premiumImage,
//     description: "High-quality premium cashews with a rich taste.",
//     category: "dry fruits",
//     stock: 10,
//     stars: 4.5,
//     reviews: 123,
//     shipping: true,
//   },
//   // Add the rest of the products...

//     // Almonds
//     {
//       id: "product2",
//       name: "Organic Almonds",
//       featured: false,
//       company: "NuttyDelight",
//       price: 120000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: AlmondImage, // Replace with the actual image variable or require/import
//       description: "Fresh organic almonds packed with nutrients.",
//       category: "nuts",
//       stock: 15,
//       stars: 4.7,
//       reviews: 200,
//       shipping: true,
//     },
//     // Walnuts
//     {
//       id: "product3",
//       name: "Natural Walnuts",
//       featured: true,
//       company: "Nature's Basket",
//       price: 170000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: WalnutsImage, // Replace with the actual image variable or require/import
//       description: "Rich and crunchy walnuts full of omega-3s.",
//       category: "nuts",
//       stock: 20,
//       stars: 4.6,
//       reviews: 150,
//       shipping: false,
//     },
//     // Dried Figs
//     {
//       id: "product4",
//       name: "Dried Figs",
//       featured: false,
//       company: "Fruit Harvest",
//       price: 140000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: DriedFigsImage, // Replace with the actual image variable or require/import
//       description: "Sweet and chewy dried figs perfect for snacking.",
//       category: "dry fruits",
//       stock: 12,
//       stars: 4.4,
//       reviews: 180,
//       shipping: true,
//     },
    
//     // Cashew Variants
//     {
//       id: "product5",
//       name: "Dry-Dates",
//       featured: true,
//       company: "CrunchyDelight",
//       price: 160000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: DatesImage, // Replace with the actual image variable or require/import
//       description: "Lightly salted roasted cashews with a crunchy texture.",
//       category: "dry-dates",
//       stock: 25,
//       stars: 4.8,
//       reviews: 220,
//       shipping: true,
//     },
//     {
//       id: "product6",
//       name: "Dry Fruits Hamper",
//       featured: false,
//       company: "NuttyFlavors",
//       price: 180000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: DryFruitsHamper, // Replace with the actual image variable or require/import
//       description: "Spicy flavored cashews for an extra zing.",
//       category: "dry fruits",
//       stock: 30,
//       stars: 4.3,
//       reviews: 90,
//       shipping: false,
//     },
//     {
//       id: "product7",
//       name: "Flavored Cashews - Honey Roasted",
//       featured: true,
//       company: "NuttyFlavors",
//       price: 190000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: FlavoredHoneyCashewImage, // Replace with the actual image variable or require/import
//       description: "Sweet honey-roasted cashews for a delicious treat.",
//       category: "flavored cashews",
//       stock: 40,
//       stars: 5,
//       reviews: 300,
//       shipping: true,
//     },
  
//     // Snacks
//     {
//       id: "product8",
//       name: "Trail Mix",
//       featured: true,
//       company: "HealthyBites",
//       price: 160000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: TrailMixImage, // Replace with the actual image variable or require/import
//       description: "A healthy mix of nuts, seeds, and dried fruits.",
//       category: "snacks",
//       stock: 50,
//       stars: 4.7,
//       reviews: 250,
//       shipping: true,
//     },
//     {
//       id: "product9",
//       name: "Granola Bars",
//       featured: false,
//       company: "NuttyDelight",
//       price: 80000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: GranolaBars, // Replace with the actual image variable or require/import
//       description: "Crunchy granola bars for a quick energy boost.",
//       category: "snacks",
//       stock: 100,
//       stars: 4.2,
//       reviews: 180,
//       shipping: true,
//     },
//     {
//       id: "product10",
//       name: "Roasted Chickpeas",
//       featured: false,
//       company: "Golden Harvest",
//       price: 100000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: RoastedChickpeasImage, // Replace with the actual image variable or require/import
//       description: "Crunchy roasted chickpeas seasoned to perfection.",
//       category: "snacks",
//       stock: 60,
//       stars: 4.1,
//       reviews: 130,
//       shipping: false,
//     },
//     {
//       id: "product11",
//       name: "Pistachios",
//       featured: true,
//       company: "NuttyDelight",
//       price: 180000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: PistaImage, // Replace with the actual image variable or require/import
//       description: "Fresh pistachios with a delicious crunch.",
//       category: "nuts",
//       stock: 20,
//       stars: 4.6,
//       reviews: 160,
//       shipping: false,
//     },
//     {
//       id: "product12",
//       name: "Raisins",
//       featured: false,
//       company: "Golden Harvest",
//       price: 120000,
//       colors: ["#FF5733", "#33FF57", "#3357FF"],  // Example colors
//       image: ResinsImage, // Replace with the actual image variable or require/import
//       description: "Naturally sweet raisins for a healthy snack.",
//       category: "dry fruits",
//       stock: 15,
//       stars: 4.5,
//       reviews: 140,
//       shipping: true,
//     },
// ];

// const SingleProduct = () => {
//   const { id } = useParams();

//   // Find the product by id from the hardcoded data
//   const singleProduct = hardcodedProducts.find((product) => product.id === id);

//   if (!singleProduct) {
//     return <div className="error">Product not found!</div>;
//   }

//   const {
//     id: productId,
//     image,
//     name,
//     company,
//     description,
//     category,
//     stock,
//     stars,
//     reviews,
//     price,
//   } = singleProduct;

//   return (
//     <Wrapper>
//       <PageNavigation title={name} />
//       <Container className="container">
//         <div className="grid grid-two-column">
//           {/* Product Image */}
//           <div className="product_images">
//             <MyImage imgs={image} />
//           </div>

//           {/* Product Data */}
//           <div className="product-data">
//             <h2>{name}</h2>
//             <Star stars={stars} reviews={reviews} />
//             <p>{reviews} reviews</p>
//             <p className="product-data-price">
//               MRP:{" "}
//               <del>
//                 <FormatPrice price={price + 250} />
//               </del>
//             </p>
//             <p className="product-data-price product-data-real-price">
//               Deal of the Day: <FormatPrice price={price} />
//             </p>
//             <p>{description}</p>
//             <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Free Delivery</p>
//               </div>
//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement</p>
//               </div>
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Product Delivered</p>
//               </div>
//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>3 Month Warranty</p>
//               </div>
//             </div>
//             <div className="product-data-info">
//               <p>
//                 Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
//               </p>
//               <p>
//                 ID: <span>{productId}</span>
//               </p>
//               <p>
//                 Brand: <span>{company}</span>
//               </p>
//             </div>
//             <hr />
//             {stock > 0 && <AddToCart product={singleProduct} />}
//           </div>
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product_images {
//     display: flex;
//     align-items: center;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;

// export default SingleProduct;





// import styled from "styled-components";
// import React from "react";
// import { useParams } from "react-router-dom";
// import FormatPrice from "./Helpers/FormatPrice";
// import PageNavigation from "./components/PageNavigation";
// import MyImage from "./components/MyImage";
// import { Container } from "./Container";
// import { TbReplace, TbTruckDelivery } from "react-icons/tb";
// import { MdSecurity } from "react-icons/md";
// import Star from "./components/Star";
// import AddToCart from "./components/AddToCart";

// // Local Cashew Data
// const products = [
//   {
//     id: "product1",
//     name: "Premium Cashews",
//     price: 80000,
//     image: [
//       "/images/premium.jpg",
//       "/images/cashew1-2.jpg",
//       "/images/cashew1-3.jpg",
//     ],
//     description: "High-quality premium cashews, perfect for snacks and recipes.",
//     stock: 20,
//     stars: 4.7,
//     reviews: 50,
//     company: "Organic Harvest",
//     category: "Dry Fruits",
//   },
//   {
//     id: "cashew2",
//     name: "Roasted Cashews",
//     price: 75000,
//     image: [
//       "/images/cashew2-1.jpg",
//       "/images/cashew2-2.jpg",
//       "/images/cashew2-3.jpg",
//     ],
//     description: "Deliciously roasted cashews with a hint of salt.",
//     stock: 15,
//     stars: 4.5,
//     reviews: 40,
//     company: "Nut Delight",
//     category: "Snacks",
//   },
// ];

// const SingleProduct = () => {
//   const { id } = useParams(); // Get product ID from the route
//   const singleProduct = products.find((product) => product.id === id); // Find product by ID

//   if (!singleProduct) {
//     return <div className="page_loading">Product not found.</div>;
//   }

//   const {
//     id: productId,
//     image,
//     name,
//     company,
//     description,
//     stock,
//     stars,
//     reviews,
//     price,
//   } = singleProduct;

//   return (
//     <Wrapper>
//       <PageNavigation title={name} />
//       <Container className="container">
//         <div className="grid grid-two-column">
//           {/* Product Image */}
//           <div className="premium.jpg">
//             <MyImage imgs={image} />
//           </div>
//           {/* Product data */}
//           <div className="product-data">
//             <h2>{name}</h2>
//             <Star stars={stars} reviews={reviews} />
//             <p>{reviews} reviews</p>
//             <p className="product-data-price">
//               MRP:
//               <del>
//                 <FormatPrice price={price + 5000} />
//               </del>
//             </p>
//             <p className="product-data-price product-data-real-price">
//               Deal of the Day: <FormatPrice price={price} />
//             </p>
//             <p>{description}</p>
//             <div className="product-data-warranty">
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Free Delivery</p>
//               </div>
//               <div className="product-warranty-data">
//                 <TbReplace className="warranty-icon" />
//                 <p>15 Days Replacement</p>
//               </div>
//               <div className="product-warranty-data">
//                 <TbTruckDelivery className="warranty-icon" />
//                 <p>Product Delivered</p>
//               </div>
//               <div className="product-warranty-data">
//                 <MdSecurity className="warranty-icon" />
//                 <p>3 Month Warranty</p>
//               </div>
//             </div>
//             <div className="product-data-info">
//               <p>
//                 Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
//               </p>
//               <p>ID : <span> {productId} </span></p>
//               <p>Brand : <span> {company} </span></p>
//             </div>
//             <hr />
//             {stock > 0 && <AddToCart product={singleProduct} />}
//           </div>
//         </div>
//       </Container>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product_images {
//     display: flex;
//     align-items: center;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;

// export default SingleProduct;









// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const SingleProduct = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="product-container">
//       <div className="product-image">
//         <img src={product.image} alt={product.title} />
//       </div>
//       <div className="product-details">
//         <h2>{product.title}</h2>
//         <p className="product-price">${product.price}</p>
//         <p className="product-description">{product.description}</p>
//         <button className="add-to-cart">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
