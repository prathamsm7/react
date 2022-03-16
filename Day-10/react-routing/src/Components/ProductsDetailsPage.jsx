import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductsDetailsPage = () => {
  const { id } = useParams();

  console.log("id", id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      //  setProduct(res.data);
      let item = res.data.filter((e) => {
        if (e.id == id) {
          return e;
        }
      });

      setProduct(item[0]);
    });
  }, []);

  console.log(product);
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        {product ? (
          <>
            <img src={product.image} alt="" style={{ width: "200px" }} />
            <div
              className="productDetails"
              style={{ padding: "20px", width: "50%" }}
            >
              <div>
                <h2 className="productName">{product.name}</h2>
                <h5 className="productPrice">Price : {product.price}</h5>
              </div>
              <h5>Specifications : </h5>
              <div style={{ width: "700px", paddingLeft: "30px" }}>
                {product.Description}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>Product Not Found</h1>
          </>
        )}
      </div>
    </>
  );
};
