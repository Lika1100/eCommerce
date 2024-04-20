/**@jsxFrag */
/**@jsx Products */
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import Product from 'components/Product';
import Products from 'components/Products';
import styles from "./App.module.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:page?",
        element: <Products />,
      },
      {
        path: "/:page/:productId",
        element: <Product />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
])

const App = () => {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App
