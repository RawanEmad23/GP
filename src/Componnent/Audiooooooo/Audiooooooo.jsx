// import axios from 'axios';
// import React, { useState } from 'react';

// const AudioPlayer = ({ urlll }) => {

//   const fetchAudio = async () => {
//     try {
//       const respo = await axios.post(urlll);
//      console.log(respo);
//     } catch (error) {
//       console.error('Error fetching audio:', error);
//     }
//   };


//   const handlePlay = () => {
//     const audio = new Audio(urlll);
//     audio.play();
//   };

//   return (
//     <div>
//       <button onClick={fetchAudio}>Fetch Audio</button>
//       <button onClick={handlePlay}>Play Audio</button>

//     </div>
//   );
// };

// export default AudioPlayer;