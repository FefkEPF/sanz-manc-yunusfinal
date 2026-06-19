/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Corporate from "./pages/Corporate";
import BlogList from "./pages/BlogList";
import BlogPostPage from "./pages/BlogPost";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Brands from "./pages/Brands";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kurumsal" element={<Corporate />} />
          <Route path="hizmetlerimiz" element={<Services />} />
          <Route path="hizmetlerimiz/:slug" element={<ServiceDetail />} />
          <Route path="markalar" element={<Brands />} />
          <Route path="urunler" element={<Products />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          {/* Catch-all to home for simplicity */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
