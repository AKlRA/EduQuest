// Theme Provider
import { CssBaseline, ThemeProvider } from '@mui/material';
import { modernOrangeTheme } from './theme/DefaultColors'; // Updated import
// Router Provider
import { RouterProvider, useRoutes } from 'react-router-dom';
import Router from './routes/Router';

// Redux Provider
import { Provider } from 'react-redux';
import store from './store';
// Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const routing = useRoutes(Router);
  const theme = modernOrangeTheme; // Updated theme
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <CssBaseline />
        {/* {routing} */}
        <RouterProvider router={Router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
