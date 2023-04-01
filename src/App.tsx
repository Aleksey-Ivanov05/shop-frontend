import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Products from './features/products/Products';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import NewProduct from './features/products/components/NewProduct';
import Register from './features/users/Register';
import Login from './features/users/Login';
import SecretPage from './features/users/SecretPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useAppSelector } from './app/hooks';
import { selectUser } from './features/users/usersSlice';

const App = () => {
  const user = useAppSelector(selectUser);

  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/products/new" element={<ProtectedRoute isAllowed={user && user.role === "admin"}><NewProduct/></ProtectedRoute>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/secret" element={<SecretPage/>}/>
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
