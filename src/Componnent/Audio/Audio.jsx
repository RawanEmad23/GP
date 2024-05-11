import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en'); // Default language is English
  const [audioUrl, setAudioUrl] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const userToken = localStorage.getItem('usertoken'); // Assume this is set elsewhere in the app

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // const convertTextToSpeech = async () => {
  //   if (!text) {
  //     alert('Please enter some text to convert.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('text', text);
  //   formData.append('language', language);

  //   try {
  //     const response = await axios.post(
  //       'https://youssifallam.pythonanywhere.com/api/v1/GTTS/text-to-speech/',
  //       formData,
  //       {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //           'Authorization': `Bearer ${userToken}`,
  //         },
  //         responseType: 'blob', // This is important for receiving a file
  //       }
        
  //     );console.log(response);

  //     // Create a URL for the audio file
  //     const blob = new Blob([response.data], { type: 'audio/mpeg' });
  //     const audioUrl = response.config.url;
  //   setAudioUrl(audioUrl); // Set the audio URL to play the audio
  //   setErrMsg(''); // Clear any previous errors

  //   } catch (error) {
  //     console.error('Error during text-to-speech conversion:', error);
  //     setErrMsg('Error occurred while converting text to speech. Please try again.');
  //   }
  // };



  const convertTextToSpeech = async () => {
    if (!text) {
      alert('Please enter some text to convert.');
      return;
    }
  
    const formData = new FormData();
    formData.append('text', text);
    formData.append('language', language);
  
    try {
      const response = await axios.post(
        'https://youssifallam.pythonanywhere.com/api/v1/GTTS/text-to-speech/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':`Bearer ${userToken}` ,
          },
          responseType: 'blob', // This is important for receiving a file
        }
      );
  
      // Create a URL for the audio file
      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(blob); // Correct way to create audio URL
      setAudioUrl(audioUrl); // Set the audio URL to play the audio
      setErrMsg(''); // Clear any previous errors
    } catch (error) {
      console.error('Error during text-to-speech conversion:', error);
      setErrMsg('Error occurred while converting text to speech. Please try again.');
    }
  };
  return (
    <div className="container container-vv">
      <div className="row">
        <div className="col-md-3 text-center camee">
          <h2 className="fw-bold text-center">Convert Text to Speech</h2>
          <p>Enter text and select a language to convert it to speech.</p>
        </div>

        <div className="col-md-7 camee3">
          {errMsg && <div className="text-danger">{errMsg}</div>}

          <div className="form-group">
            <label>Text to Convert:</label>
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text here"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Language:</label>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="form-control"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="es">Spanish</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          <button className="btn btn-primary mt-3" onClick={convertTextToSpeech}>
            Convert to Speech
          </button>

          {audioUrl && ( 
            <div className="mt-3">
              <h3>Audio Output:</h3>
           
              <audio  autoPlay controls>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              
              </audio>
             
            </div>
          )}
        </div>
      </div>
     
    </div>
    
  );
}

export default App;
