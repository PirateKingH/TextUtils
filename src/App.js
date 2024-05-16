import React, { useState } from 'react';
import './App.css';
/* import About from './Components/About'; */
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
/* import { BrowserRouter, Route, Routes} from 'react-router-dom'; */


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // For Givining Alert message
  
  const showAlert = (message, type) =>
    {
      setAlert({msg:message,
        type:type
        })

      setTimeout(()=>{
        setAlert(null);
      }, 1500);
    }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("The Dark Mode is Enabled", "success");
      document.title = 'TextUtilis - Dark Mode';
      /* setInterval(() => {
        document.title = 'TextUtilis is Amazing Mode';
      }, 2000);
      setInterval(()=>{
        document.title = 'Install TextUtilis Now' ;
      }, 1500);*/
    } 
    else
    {
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("The Light Mode is Enabled", "success");
      document.title = 'TextUtilis - Light Mode';
    }
  }
  return (
    <>
   {/* <Navbar title="TextUtils" aboutText="aboutTextUtils"  />*/}
   {/*<BrowserRouter>*/}
   <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} />
   <Alert alert={alert} />
   <div className="container my-3" >
    {/* // exact path is used bcz react using partial method */}
     {/*  <Routes> */}
     {/*  //  For routing MainPage which means textform */}
      {/*   <Route exact path="/" 
        element={<TextForm  showAlert={showAlert} heading="Enter the test to analyze" 
        mode={mode}/>}>
        </Route> */}
     {/*  // For Routing to About */}
    {/*   <Route exact path="/About" 
      element={<About/>}>
      </Route>
     </Routes> */}
     <TextForm  showAlert={showAlert} heading="Enter the test to analyze" 
        mode={mode}/>
   </div>
   {/* </BrowserRouter> */}
   </>
  );
}

export default App;

