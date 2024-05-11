import React from 'react';
import ReactDOM from 'react-dom/client';
import  UserContextProvider  from './Componnent/Context/Usercontext'
import'bootstrap/dist/js/bootstrap.bundle.js'
import'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
// import { RNCamera, FaceDetector } from 'react-native-camera';
// import'react-native-camera'
import App from './App';
import 'jquery/dist/jquery.min.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<UserContextProvider>

      <App />
</UserContextProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import Webcam from 'react-webcam';
// import UserContextProvider from './Componnent/Context/Usercontext';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const AppWithWebcam = () => (
//   <UserContextProvider>
//     <Webcam />
//     <App />
//   </UserContextProvider>
// );

// ReactDOM.render(<AppWithWebcam />, document.getElementById('root'));

// reportWebVitals();