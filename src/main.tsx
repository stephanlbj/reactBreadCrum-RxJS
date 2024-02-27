import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CardContextProvider } from './Context/CartItemContext.tsx'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { SkipPageContextProvider } from './Context/SkipPageContext.tsx'
import { SearchContextProvider } from './Context/SearchContext.tsx'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardContextProvider>
      <SkipPageContextProvider>
        <SearchContextProvider>
     <QueryClientProvider client={queryClient}>
     <App />
     <ToastContainer />
    </QueryClientProvider>
    </SearchContextProvider>
    </SkipPageContextProvider>
    </CardContextProvider>
    
  </React.StrictMode>,
)
