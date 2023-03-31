
import './App.css';
import './globalstyle.scss'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Home from './page/Home/Home';
import Products from './page/Products/Products';
import Product from './page/Product/Product';
function App() {
  // const [products, setproducts] = useState([])
  // useEffect(() => {
  //   const fetchData = async ()=>{
  //     const data = await axios.get(process.env.REACT_APP_API_URL+'/products',{
  //       headers:{
  //         Authorization: 'bearer '+process.env.REACT_APP_API_TOKEN
  //       }
  //     })
  //     console.log(data)
  //     setproducts(data.data.data)
  //   }
  //   return () => {
  //     fetchData()
  //   }
  // }, [])
  const Layout = ()=>{
    return (
      <div className="">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: '/products',
          element: <Products/>,
        },
        {
          path: '/product/:id',
          element: <Product/>,
        },
      ]
    }
  ])
  return (
    <div className="app">
      <RouterProvider router ={router}/>
    </div>
  );
}

export default App;
