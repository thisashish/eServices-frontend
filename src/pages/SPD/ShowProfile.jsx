
// In ShowProfile.jsx
import React, { useEffect, useState } from "react";
import { SPFindall } from "../../API/SP/SPFind";

const ShowProfile = ({ setProfileImage }) => {
  // ... your existing code

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SPFindall();
        if (data && data.length > 0) {
          setProfileImage(data[0].img); // Assuming data[0] has the profile image path
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchData();
  }, [setProfileImage]);

  // ... rest of your component code
};

export default ShowProfile;



















// import React, { useEffect, useState } from "react";
// import { SPFindall } from "../../API/SP/SPFind";
// // import { DeleteProfile } from "../../../src/Routes/Profile/DeleteProfile";

// export const ShowProfile = () => {
//   const [profiles, setProfiles] = useState([]);
  
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await SPFindall();
        
//         setProfiles(data);
//         console.log(data.img);
//       } catch (error) {
//         console.error("Error fetching profiles:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Image</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map((profile, index) => (
//             <tr key={index}>
//               <td>{profile.name}</td>
//               <td>
//                 <img
//                   src={`http://localhost:4001/${profile.img}`}
//                   style={{ width: 100, height: 100 }}
//                   alt={profile.name}
//                 />
//               </td>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

