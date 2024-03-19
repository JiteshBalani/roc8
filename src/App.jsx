
// import Navbar from './components/Navbar'
// import { Outlet, createBrowserRouter } from 'react-router-dom'
// import Signup from './pages/Signup';
// import Verify from './pages/Verify';
// import Login from './pages/Login';
// import Protected from './pages/Protected';
// import ErrorPage from './pages/ErrorPage';

// function App() {

//   return (
//     <>
//     <Navbar/>
//     <Outlet/>
//     </>
//   )
// }

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//     children:[
//       {
//         path: '/verify',
//         element: <Verify/>
//       },
//       {
//         path: '/protected',
//         element: <Protected/>
//       }
//     ],
//     errorElement: <ErrorPage/>
//   },
//   {
//     path: '/verify',
//         element: <Verify/>
//   }
// ]);


// export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Verify from './pages/Verify';
import Protected from './pages/Protected';
import ErrorPage from './pages/ErrorPage';
import Wait from './pages/Wait';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Wait/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/verify" element={<Verify/>} />
        <Route path="/protected" element={<Protected/>} />
        <Route component={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
