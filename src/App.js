import React from 'react';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sessions from './Components/Sessions';

function App() {
  return (
      
   <Router>
          <Header /> 
          <Container>
            <Routes>   
                <Route path='/' element={<Home/>}/>    
              
                <Route path='/Create' element={<Create />}/>
              
                <Route path='/Update' element={<Update />}/>
                
                <Route path='/Read' element={<Read />}/>

                <Route path='/Sessions' element={<Sessions />}/>
            </Routes>
        </Container>
        <Footer />  
    </Router>
  );
}  

export default App;
