// import React from "react";
// import { navigation } from "../data";
// import { Link } from "react-scroll";

// const Nav = () => {
//   return (
//     <nav className="hidden lg:flex">
//       <ul className="lg:flex gap-x-6 font-body font-semibold text-sm text-primary">
//         {navigation.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 to={item.href}
//                 smooth={true}
//                 offset={-120}
//                 activeClass="active"
//                 spy={true}
//                 className="hover:text-accent-hover
//           transition-all duration-300 cursor-pointer"
//               >
//                 {item.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { navigation } from "../data";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="lg:flex gap-x-6 font-body font-semibold text-sm text-primary">
        {navigation?.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href} // Use the href as the 'to' prop for Link
              className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
