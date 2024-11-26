// import { useAuth0 } from "@auth0/auth0-react";
// import styled from "styled-components";

// const Contact = () => {
//   const { isAuthenticated, user } = useAuth0();

//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Contact page</h2>

//       <iframe
//          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.9710129813184!2d73.81429187415532!3d15.539684585065697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1b3b2ada4bb%3A0xfc78326afeb77a6c!2sSawaikar&#39;s%20Goan%20Cashews%20And%20Dry%20Fruits-%20Best%20Cashews%20in%20Goa!5e0!3m2!1sen!2sin!4v1731958498680!5m2!1sen!2sin" 
//         width="100%"
//         height="400"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>



//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/xdojzzlj"
//             method="POST"
//             className="contact-inputs">
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               value={isAuthenticated ? user.name : ""}
//               required
//               autoComplete="off"
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               value={isAuthenticated ? user.email : ""}
//               required
//             />

//             <textarea
//               name="Message"
//               cols="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter you message"></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;




import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useState } from "react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();

  // State for managing form inputs
  const [formData, setFormData] = useState({
    username: isAuthenticated && user ? user.name : "",
    email: isAuthenticated && user ? user.email : "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.9710129813184!2d73.81429187415532!3d15.539684585065697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1b3b2ada4bb%3A0xfc78326afeb77a6c!2sSawaikar&#39;s%20Goan%20Cashews%20And%20Dry%20Fruits-%20Best%20Cashews%20in%20Goa!5e0!3m2!1sen!2sin!4v1731958498680!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjkvedgg"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
              required
              autoComplete="off"
              onChange={handleChange} // Added onChange handler
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={formData.email}
              required
              onChange={handleChange} // Added onChange handler
            />

            {/* <textarea
              name="message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange} // Added onChange handler
            ></textarea> */}


              <textarea
               name="Message"
               cols="30"
               rows="10"
               required
               autoComplete="off"
               placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
