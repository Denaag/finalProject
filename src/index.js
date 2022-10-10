
// index.js is the starting point of every React JS app
import React from 'react';
import ReactDOM from 'react-dom/client'; //only call react-dom once in our entire app, no matter how big the app is.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ContactPage from './components/contact-us';
import AboutPage from './components/about';
import PageNotFound from './components/page-not-found';
// import 'bootstrap/dist/css/bootstrap.min.css'; // if you using bootstrap style it's affecting our exiting style. so we need to rebuild our syle as you want
{/* The following line can be included in your src/index.js or App.js file*/}


const root = ReactDOM.createRoot(document.getElementById('root')); //ReactDom is used to render our components and entire app - into the real DOM, the div with ID of root on index.html
root.render(
  <React.StrictMode>
    {/* where all pages met we can use routing wrappers like this */}
    <BrowserRouter>
    <Routes>
       <Route path='/'  element={ <App />} />
       <Route path='/about' element={<AboutPage/>} /> 
       <Route path='/contact' element={<ContactPage/>} /> 
       <Route path='*' element={<PageNotFound/>} />  {/* page not found  */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
