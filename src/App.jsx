
import Navbar from './components/Navbar'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import Login from './pages/Login';
import Protected from './pages/Protected';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/verify',
        element: <Verify/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/protected',
        element: <Protected/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);


export default App
