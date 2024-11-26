// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FiShoppingCart } from "react-icons/fi";
// import { CgMenu, CgClose } from "react-icons/cg";
// import { useCartContext } from "../context/cart_context";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "../styles/Button";

// const Nav = () => {
//   const [menuIcon, setMenuIcon] = useState();
//   const { total_item } = useCartContext();
//   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   const Nav = styled.nav`
//     .navbar-lists {
//       display: flex;
//       gap: 4.8rem;
//       align-items: center;

//       .navbar-link {
//         &:link,
//         &:visited {
//           display: inline-block;
//           text-decoration: none;
//           font-size: 1.8rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           color: ${({ theme }) => theme.colors.black};
//           transition: color 0.3s linear;
//         }

//         &:hover,
//         &:active {
//           color: ${({ theme }) => theme.colors.helper};
//         }
//       }
//     }

//     .mobile-navbar-btn {
//       display: none;
//       background-color: transparent;
//       cursor: pointer;
//       border: none;
//     }

//     .mobile-nav-icon[name="close-outline"] {
//       display: none;
//     }

//     .close-outline {
//       display: none;
//     }

//     .cart-trolley--link {
//       position: relative;

//       .cart-trolley {
//         position: relative;
//         font-size: 3.2rem;
//       }

//       .cart-total--item {
//         width: 2.4rem;
//         height: 2.4rem;
//         position: absolute;
//         background-color: #000;
//         color: #000;
//         border-radius: 50%;
//         display: grid;
//         place-items: center;
//         top: -20%;
//         left: 70%;
//         background-color: ${({ theme }) => theme.colors.helper};
//       }
//     }

//     .user-login--name {
//       text-transform: capitalize;
//     }

//     .user-logout,
//     .user-login {
//       font-size: 1.4rem;
//       padding: 0.8rem 1.4rem;
//     }

//     @media (max-width: ${({ theme }) => theme.media.mobile}) {
//       .mobile-navbar-btn {
//         display: inline-block;
//         z-index: 9999;
//         border: ${({ theme }) => theme.colors.black};

//         .mobile-nav-icon {
//           font-size: 4.2rem;
//           color: ${({ theme }) => theme.colors.black};
//         }
//       }

//       .active .mobile-nav-icon {
//         display: none;
//         font-size: 4.2rem;
//         position: absolute;
//         top: 30%;
//         right: 10%;
//         color: ${({ theme }) => theme.colors.black};
//         z-index: 9999;
//       }

//       .active .close-outline {
//         display: inline-block;
//       }

//       .navbar-lists {
//         width: 100vw;
//         height: 100vh;
//         position: absolute;
//         top: 0;
//         left: 0;
//         background-color: #fff;

//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;

//         visibility: hidden;
//         opacity: 0;
//         transform: translateX(100%);
//         /* transform-origin: top; */
//         transition: all 3s linear;
//       }

//       .active .navbar-lists {
//         visibility: visible;
//         opacity: 1;
//         transform: translateX(0);
//         z-index: 999;
//         transform-origin: right;
//         transition: all 3s linear;

//         .navbar-link {
//           font-size: 4.2rem;
//         }
//       }
//       .cart-trolley--link {
//         position: relative;

//         .cart-trolley {
//           position: relative;
//           font-size: 5.2rem;
//         }

//         .cart-total--item {
//           width: 4.2rem;
//           height: 4.2rem;
//           font-size: 2rem;
//         }
//       }

//       .user-logout,
//       .user-login {
//         font-size: 2.2rem;
//         padding: 0.8rem 1.4rem;
//       }
//     }
//   `;

//   return (
//     <Nav>
//       <div className={menuIcon ? "navbar active" : "navbar"}>
//         <ul className="navbar-lists">
//           <li>
//             <NavLink
//               to="/"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/products"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Products
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className="navbar-link "
//               onClick={() => setMenuIcon(false)}>
//               Contact
//             </NavLink>
//           </li>
//           {isAuthenticated && <p>{user.name}</p>}

//           {isAuthenticated ? (
//             <li>
//               <Button
//                 onClick={() => logout({ returnTo: window.location.origin })}>
//                 Log Out
//               </Button>
//             </li>
//           ) : (
//             <li>
//               <Button onClick={() => loginWithRedirect()}>Log In</Button>
//             </li>
//           )}

//           <li>
//             <NavLink to="/cart" className="navbar-link cart-trolley--link">
//               <FiShoppingCart className="cart-trolley" />
//               <span className="cart-total--item"> {total_item} </span>
//             </NavLink>
//           </li>
//         </ul>

//         {/* two button for open and close of menu */}
//         <div className="mobile-navbar-btn">
//           <CgMenu
//             name="menu-outline"
//             className="mobile-nav-icon"
//             onClick={() => setMenuIcon(true)}
//           />
//           <CgClose
//             name="close-outline"
//             className="mobile-nav-icon close-outline"
//             onClick={() => setMenuIcon(false)}
//           />
//         </div>
//       </div>
//     </Nav>
//   );
// };

// export default Nav;







// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { FiShoppingCart } from "react-icons/fi";
// import { CgMenu, CgClose } from "react-icons/cg";
// import { useCartContext } from "../context/cart_context";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from "../styles/Button";

// const Nav = () => {
// const [menuIcon, setMenuIcon] = useState(false);
// const [showLoginModal, setShowLoginModal] = useState(false);

// const { total_item } = useCartContext();
// const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

// const Nav = styled.nav`
// .navbar-lists {
// display: flex;
// gap: 4.8rem;
// align-items: center;

// .navbar-link {
// &:link,
// &:visited {
// display: inline-block;
// text-decoration: none;
// font-size: 1.8rem;
// font-weight: 500;
// text-transform: uppercase;
// color: ${({ theme }) => theme.colors.black};
//  transition: color 0.3s linear;
// }

//  &:hover,
//  &:active {
//  color: ${({ theme }) => theme.colors.helper};
//  }
//  }
// }

// .mobile-navbar-btn {
//  display: none;
// background-color: transparent;
// cursor: pointer;
//  border: none;
// }

// .cart-trolley--link {
//  position: relative;

//  .cart-trolley {
// font-size: 3.2rem;
// }

// .cart-total--item {
//  width: 2.4rem;
//  height: 2.4rem;
//  position: absolute;
//  background-color: ${({ theme }) => theme.colors.helper};
//  border-radius: 50%;
//  display: grid;
//  place-items: center;
//  top: -20%;
//  left: 70%;
// }
//  }

// .login-modal {
//  position: fixed;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background: rgba(0, 0, 0, 0.6);
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  z-index: 1000;
//  .modal-content {
//   background: #fff;
//   padding: 2rem;
//   border-radius: 0.5rem;
//   width: 90%;
//   max-width: 400px;
//   text-align: center;
//   h2 {
//    margin-bottom: 1.5rem;
//   }
//   form {
//    display: flex;
//    flex-direction: column;
//    gap: 1rem;
//    input {
//     padding: 0.8rem;
//     border: 1px solid #ccc;
//     border-radius: 0.4rem;
//    }

//  button {
//   padding: 0.8rem;
//   background-color: ${({ theme }) => theme.colors.helper};
//   color: white;
//   border: none;
//   border-radius: 0.4rem;
//   cursor: pointer;
//  }
//  }

//  .close-modal {
//   margin-top: 1rem;
//   color: ${({ theme }) => theme.colors.black};
//   cursor: pointer;
//  }
//  }
//   }
// `;

//  return (
//  <Nav>
//   <div className={menuIcon ? "navbar active" : "navbar"}>
//  <ul className="navbar-lists">
//  <li>
//   <NavLink
//    to="/"
//    className="navbar-link"
//    onClick={() => setMenuIcon(false)}
//   >
//    Home
//   </NavLink>
//  </li>
//  <li>
//   <NavLink
//    to="/about"
//    className="navbar-link"
//    onClick={() => setMenuIcon(false)}
//   >
//    About
//   </NavLink>
//  </li>
//  <li>
//   <NavLink
//    to="/products"
//    className="navbar-link"
//    onClick={() => setMenuIcon(false)}
//   >
//    Products
//   </NavLink>
//  </li>
//  <li>
//   <NavLink
//    to="/contact"
//    className="navbar-link"
//    onClick={() => setMenuIcon(false)}
//   >
//    Contact
//   </NavLink>
//  </li>
//  {isAuthenticated && <p>{user.name}</p>}

//  {isAuthenticated ? (
//   <li>
//    <Button
//     onClick={() => logout({ returnTo: window.location.origin })}
//    >
//     Log Out
//    </Button>
//   </li>
//  ) : (
//   <li>
//    <Button onClick={() => setShowLoginModal(true)}>Log In</Button>
//   </li>
//  )}

//  <li>
//   <NavLink to="/cart" className="navbar-link cart-trolley--link">
//    <FiShoppingCart className="cart-trolley" />
//    <span className="cart-total--item">{total_item}</span>
//   </NavLink>
//  </li>
//  </ul>


//  <CgMenu
//   name="menu-outline"
//   className="mobile-nav-icon"
//   onClick={() => setMenuIcon(true)}
//  />
//  <CgClose
//   name="close-outline"
//   className="mobile-nav-icon close-outline"
//   onClick={() => setMenuIcon(false)}
//  />
//  </div>
//  {/* </div> */}

//  {/* Login Modal */}
//  {showLoginModal && (
//   <div className="login-modal">
//   <div className="modal-content">
//   <h2>Login</h2>
//   <form
//  onSubmit={(e) => {
//    e.preventDefault();
//    loginWithRedirect(); // Call Auth0 login
//    }}
//   >
//    <input type="text" placeholder="Email" required />
//    <input type="password" placeholder="Password" required />
//    <button type="submit">Log In</button>
//   </form>
//   <span
//    className="close-modal"
//    onClick={() => setShowLoginModal(false)}
//   >
//    Close
//   </span>
//   </div>
//   </div>
//  )}
//   </Nav>
//  );
// };

// export default Nav;










import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
  const [showModal, setShowModal] = useState(false); // Tracks modal visibility
  const [formData, setFormData] = useState({ email: "", password: "" }); // Form data state

  const { total_item } = useCartContext();

  const Nav = styled.nav`
.navbar-lists {
  display: flex;
  gap: 4.8rem;
  align-items: center;

  .navbar-link {
    &:link,
    &:visited {
      display: inline-block;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }

    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: ${({ theme }) => theme.colors.helper};
    }
  }

  // .user-login--name {
  //   text-transform: capitalize;
  // }

  // .user-logout,
  // .user-login {
  //   font-size: 1.4rem;
  //   padding: 0.8rem 1.4rem;
  // }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.5rem 1rem;
    }
  }
}


.login-btn,
.logout-btn {
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  border: none;

  /* Center the text */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


    .login-btn {
      background-color: ${({ theme }) => theme.colors.helper};
      color: white;
    }

    .logout-btn {
      background-color: #ff4d4f;
      color: white;
    }

    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      border-radius: 0.5rem;

      .form-group {
        margin-bottom: 1.5rem;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
      }

      input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
      }

      .form-actions {
        display: flex;
        justify-content: space-between;
      }

      button {
        padding: 0.8rem 1.6rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
      }

      .submit-btn {
        background-color: ${({ theme }) => theme.colors.helper};
        color: white;
      }

      .cancel-btn {
        background-color: #ff4d4f;
        color: white;
      }
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
  `;

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have logged out!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowModal(false);
    alert("You are successfully logged in!");
    setFormData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="login-btn" onClick={handleLogin}>
                Sign In
              </button>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {showModal && (
          <>
            <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
            <div className="modal">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    Login
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </Nav>
  );
};

export default Nav;
