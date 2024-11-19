import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const query = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={query}>
    <App />

    {/* bildirim */}
    <ToastContainer />

    {/* geliştirici araçları */}
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);
