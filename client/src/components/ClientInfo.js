// import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

// export default function ClientInfo({ client }) {
//   return (
//     <>
//       <h5 className="mt-5">Client Information</h5>
//       <ul className="list-group">
//         <li className="list-group-item">
//           <FaIdBadge className="icon" /> {client.name}
//         </li>
//         <li className="list-group-item">
//           <FaEnvelope className="icon" /> {client.email}
//         </li>
//         <li className="list-group-item">
//           <FaPhone className="icon" /> {client.phone}
//         </li>
//       </ul>
//     </>
//   );
// }

import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  if (!client) {
    // Handle the case where client data is not available
    return <p>Client information not available</p>;
  }

  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name || "N/A"}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email || "N/A"}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone || "N/A"}
        </li>
      </ul>
    </>
  );
}
