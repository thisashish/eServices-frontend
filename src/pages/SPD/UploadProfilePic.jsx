// import React, { useState } from 'react';
// import axios from 'axios';

//  const UploadProfilePic = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('profilePic', selectedFile);

//     try {
//       await axios.post('http://localhost:4001/service/provider/images', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       // Handle success, maybe update UI or show a success message
//     } catch (error) {
//       // Handle error, show an error message
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default UploadProfilePic;


