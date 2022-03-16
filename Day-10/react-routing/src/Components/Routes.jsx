import { Route, Routes, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { NotFoundPage } from "./NotFoundPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";

export const Routess = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/products/:id" element={<ProductsDetailsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
