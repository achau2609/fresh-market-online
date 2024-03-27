import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../shared/Input";

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
    Brand: 'ABC',
    ProductPrice: 5.99,
    Quantity: 150,
    CategoryId: "Fresh Fruits",
    Inventory: 50,
    Picture: [
      "https://assets.shop.loblaws.ca/products/20606349001/b1/en/front/20606349001_front_a06.png",
      "https://theproduceguyz.com/cdn/shop/products/image_38f13c69-1f3b-4a3f-86d5-14a06180efa8.jpg?v=1603080352",
      "https://meridianfarmmarket.ca/cdn/shop/products/Apples-5lb.jpg?v=1673029747",
      "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/bffcf967-09f4-4b0f-8b39-9fc65641cd57/500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Mq0gUqWH4geNQrBCTVqwjMOqsHRybLsUqw&usqp=CAU",
    ],
  });

  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const changeOrgPrice = (e) => {
    if (hasDiscount && product.discountPrice)
      setDiscountPercentage(((e.target.value - product.discountPrice) / e.target.value * 100).toFixed(2))
  };

  const removeDiscountPrice = () =>{
    const newProduct = {...product};
    delete newProduct['discountPrice']
    console.log(newProduct)
    setProduct(newProduct)
    console.log(product.discountPrice)
  }

  //Image
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

  const submit = () => {
    let validate = true
    const form = document.getElementById('product-form')
    validate = form.checkValidity()
    if (!validate) {
      //do something
    }
  }

  return (
    <div className="container text-start">
      <div className="row justify-content-between">
        <div className="col-auto">
          <Link to="/admin/products">{"<<Back"}</Link>
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-success" onClick={submit}>
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
              <div className="col m-2" key={source}>
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
                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border-0"
                    onClick={() => removeImage(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                    <span className="visually-hidden">Remove</span>
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
                  className="bi bi-upload mt-2"
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
                className="bi bi-trash mx-2"
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
          <form id='product-form' noValidate>
            <div className="row mb-3 gx-0">
              <Input id='product-name' label='Product Name' type='text' isRequired={true}
                value={product.ProductName}
                onChange={(e) => {setProduct({ ...product, ProductName: e.target.value }); console.log(e)}}
              />
            </div>

            <div className="row mb-3 gx-0">
              <Input id="product-brand" label='Brand' type='text'
                isRequired={true}
                value={product.Brand}
                onChange={(e) => setProduct({ ...product, Brand: e.target.value })}
              />
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-category" className="required">Category</label>
              <select className="form-select" id="product-category"
                value={product.CategoryId}
                required
                onChange={(e) => setProduct({ ...product, CategoryId: e.target.value })}
              >
                {categories.map((category) =>
                  <option key={category.key}>{category.key}</option>
                )}
              </select>
            </div>
            <div className="row mb-3 gx-0">
              <label htmlFor="product-description">Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                id="product-description"
                value={product.ProductDescription}
                onChange={(e) => setProduct({ ...product, ProductDescription: e.target.value })}
              ></textarea>
            </div>
            <div className="row mb-3 gx-0">
              <Input id="org-price" label='Original Price' type='number'
                isRequired={true}
                value={product.ProductPrice}
                placeholder='$0.00'
                min={0}
                step={0.01}
                onChange={(e) => { setProduct({ ...product, ProductPrice: e.target.value }); changeOrgPrice(e) }}
              />
            </div>
            <div className="row mb-3 gx-0">
              <div className="col-auto col-md-6">
                <Input id="product-inventory" label='Inventory' type='number'
                  isRequired={true}
                  value={product.Inventory}
                  min={0}
                  onChange={(e) => setProduct({ ...product, Inventory: e.target.value })}
                />
              </div>
            </div>
            <div className="row mb-3 gx-0">
              <div className="col-7 form-check">
                <Input id="discount" label='Has Discount' type='checkbox'
                  isRequired={false}
                  value=''
                  onChange={(e) => {
                    setHasDiscount(e.target.checked)
                    setDiscountPercentage(0)
                    removeDiscountPrice()
                  }}
                  className='form-check-input'
                />
              </div>
            </div>
            {hasDiscount ? 
            <div className="row mb-3 gx-0">
              <label className="required">Discount Price</label>
              <div className="col-auto col-md-5 me-3">
                <Input id="discount-number" type='number'
                  isRequired={hasDiscount}
                  value={product.discountPrice}
                  min={0}
                  max={product.ProductPrice}
                  step={0.01}
                  onChange={(e) => {
                    setProduct({ ...product, discountPrice: e.target.value })
                    setDiscountPercentage(((product.ProductPrice - e.target.value) / product.ProductPrice * 100).toFixed(2));
                  }}
                  placeholder='$4.99'
                />
              </div>
              <div className="col-auto col-md-5">
                <Input id="discount-precentage" type='number'
                  isRequired={hasDiscount}
                  value={discountPercentage}
                  min={0}
                  max={100}
                  step={0.01}
                  placeholder='50.00%'
                  onChange={e => {
                    setDiscountPercentage(e.target.value);
                    setProduct({ ...product, discountPrice: (product.ProductPrice * (100 - e.target.value) / 100).toFixed(2) })
                  }}
                />
              </div>
            </div>
            :''}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
