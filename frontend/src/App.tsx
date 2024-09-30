import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Features/HomePage';
import { DonationPage } from './pages/Features/DonationPage';
import { ConnectionPage } from './pages/Features/ConnectionPage';
import { DirectoryPage } from './pages/Features/DirectoryPage';
import { EventsPage } from './pages/Features/EventsPage';
import { ThemeProvider } from './components/theme-provider';
import './App.css';
import LoginSignup from './pages/Login_Signup/LoginSignup';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/donate', element: <DonationPage /> },
  { path: '/connect', element: <ConnectionPage /> },
  { path: '/directory', element: <DirectoryPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '/login', element: <LoginSignup /> },
]);

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
