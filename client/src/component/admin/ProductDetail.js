import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const categories = [
    {
      cat: "Meat",
      key: "Meat",
    },
    {
      cat: "Dairy & Eggs",
      key: "Dairy & Eggs",
    },
    {
      cat: "Pantry",
      key: "Rice",
    },
    {
      cat: "Pantry",
      key: "Baking",
    },
    {
      cat: "Fruits & Vegetables",
      key: "Herbs",
    },
    {
      cat: "Fruits & Vegetables",
      key: "Fresh Vegetables",
    },
    {
      cat: "Fruits & Vegetables",
      key: "Fresh Fruits",
    },
  ];

  const [product, setProduct] = useState({
    ProductName: "Organic Apples",
    ProductDescription: "Organic Fresh Apples (Bag 2lb)",
    ProductPrice: 5.99,
    Quantity: 150,
    CategoryId: "Fresh Fruits",
    Picture: [
      "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png",
      "https://theproduceguyz.com/cdn/shop/products/image_38f13c69-1f3b-4a3f-86d5-14a06180efa8.jpg?v=1603080352",
      "https://meridianfarmmarket.ca/cdn/shop/products/Apples-5lb.jpg?v=1673029747",
      "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/bffcf967-09f4-4b0f-8b39-9fc65641cd57/500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mq0gUqWH4geNQrBCTVqwjMOqsHRybLsUqw&usqp=CAU",
    ],
  });

  const [hasDiscount, setHasDiscount] = useState(false);

  const toggleHasDiscount = () => {
    setHasDiscount(!hasDiscount);
  };

  const [orgPrice, setOrgPrice] = useState(product.ProductPrice);
  const [discountNumber, setDiscountNumber] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const changeOrgPrice = (e) => {
    setOrgPrice(e.target.value);
    setDiscountPercentage(((discountNumber / orgPrice) * 100).toFixed(2));
    setDiscountNumber((orgPrice * discountPercentage).toFixed(2));
  };

  const changeDiscountNumber = (e) => {
    setDiscountNumber(e.target.value);
    setDiscountPercentage(Math.round((discountNumber / orgPrice) * 100));
  };

  const changeDiscountPercentage = (e) => {
    setDiscountPercentage(e.target.value);
    setDiscountNumber((orgPrice * discountPercentage).toFixed(2));
  };

  const [previewImage, setPreviewImage] = useState(product.Picture[0]);
  const clickImage = (e) => {
    setPreviewImage(e.target.src);
  };

  const removeImage = (index) => {
    const oldPicture = product.Picture;
    oldPicture.splice(index, 1);

    const newProduct = { ...product, Picture: oldPicture };
    setProduct(newProduct);
  };
  return (
    <div className="container text-start">
      <div className="row justify-content-between">
        <div className="col-auto">
          <Link to="/admin/products">{"<<Back"}</Link>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-success">
            Save
          </button>
        </div>
      </div>
      <hr />
      <div className="row">
        {/* Images */}
        <div className="col-6">
          <div className="row">
            <img src={previewImage} alt="preview" />
          </div>
          <div className="row row-cols-1 row-cols-md-4 justify-content-start gx-5">
            {product.Picture.map((source, index) => (
              <div className="col m-2">
                <button
                  type="button"
                  className="btn p-0 m-0 position-relative"
                  onClick={clickImage}
                >
                  <img
                    src={source}
                    className="card-img-top"
                    alt={product.ProductName}
                  />
                  <button
                    class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border-0"
                    onClick={() => removeImage(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      class="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                    <span class="visually-hidden">Remove</span>
                  </button>
                </button>
              </div>
            ))}
            {/* Upload image */}
            <div className="col m-2">
              <label
                htmlFor="img-upload"
                className="card-img-top btn w-100 h-100 border-info rounded-top text-info pe-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-upload mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
              </label>
              <input
                type="file"
                accept="image/*"
                className="btn form-control d-none"
                id="img-upload"
                name="img-upload"
              />
            </div>
          </div>
          {/* Delete Button */}
          <div className="row">
            <button type="button" className="btn btn-outline-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
              Delete this product
            </button>
          </div>
        </div>
        {/* Edit product form */}
        <div className="col-6">
          <form>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-name">Product Name</label>
              <input
                id="product-name"
                type="text"
                className="form-control"
                value={product.ProductName}
              />
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-brand">Brand</label>
              <input
                id="product-brand"
                type="text"
                className="form-control"
                value="ABC"
              />
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-category">Category</label>
              <select className="form-select" id="product-category">
                {categories.map((category) =>
                  category.key === product.CategoryId ? (
                    <option selected>{category.key}</option>
                  ) : (
                    <option>{category.key}</option>
                  )
                )}
              </select>
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-description">Description</label>
              <textarea
                class="form-control"
                placeholder="Description"
                id="product-description"
                value={product.ProductDescription}
              ></textarea>
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="org-price">Original Price</label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  id="org-price"
                  onChange={changeOrgPrice}
                />
              </div>
            </div>
            <div className="row mb-3 gx-0">
              <div className="col-auto col-md-4">
                <label htmlFor="product-inventory">Inventory</label>
                <input
                  id="product-inventory"
                  type="text"
                  className="form-control"
                  value="50"
                />
              </div>
            </div>
            <div className="row mb-3 gx-0">
              <div className="col-7 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="discount"
                  onChange={toggleHasDiscount}
                />
                <label className="form-check-label" htmlFor="discount">
                  Has Discount
                </label>
              </div>
            </div>
            <div className={hasDiscount ? "row mb-3 gx-0" : "d-none"}>
              <div className="col-auto col-md-5 me-3">
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    id="discount-number"
                    value={discountNumber}
                    onChange={changeDiscountNumber}
                  />
                </div>
              </div>
              <div className="col-auto col-md-5">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="discount-precentage"
                    value={discountPercentage}
                    onChange={changeDiscountPercentage}
                  />
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
