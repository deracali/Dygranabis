import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Form from './Forms/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvestmentForm from './Forms/InvestmentForm';
import BlogForm from './Forms/BlogForm';
import Success from './success/Success';
import Update from './Forms/Update';
import DeleteSuccess from './deleteSucess/DeleteSuccess';
import ProductUpdate from './Forms/productUpdate';

function App() {
  return (
    <>
      <div className='app'>
        <Sidebar />
        {/* <Content /> */}
    <BrowserRouter>
    <Routes>
     <Route path="/products" exact element={<Form/> } />     
     <Route path="/investment" exact element={<InvestmentForm/> } />     
     <Route path="/blog" exact element={<BlogForm/> } />     
     <Route path="/success" exact element={<Success/> } />     
     <Route path="/delete" exact element={<DeleteSuccess/> } />     
     <Route path="/home" exact element={<Content/> } />    
     <Route path="/update/:id" element={<Update/> } />  
     <Route path="/productUpdate/:id" element={<ProductUpdate/> } />  
    </Routes>
    </BrowserRouter>   

      </div>
    </>
  )
}

export default App