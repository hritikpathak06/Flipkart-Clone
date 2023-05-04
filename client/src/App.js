import { Box } from '@mui/material';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import ShoppingCart from './component/Cart/ShoppingCart';
import DetailView from './component/Details/DetailView';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box marginTop={8}>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<DetailView/>}/>
          <Route path='/cart' element={<ShoppingCart/>}/>
         </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
