
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Detail from './Detail.jsx';
const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});


const root = createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="detail/:id" element={<Detail />} />
    </Routes>
    </BrowserRouter>
  </ApolloProvider>,
);

