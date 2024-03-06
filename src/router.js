import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import New from './pages/New';
import Month from './pages/Month';
import Years from './pages/Years';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Month />
      },
      {
        path: '/Years',
        element: <Years />
      },
    ]
  },
  {
    path: '/New',
    element: <New />,
  },
])

export default router;