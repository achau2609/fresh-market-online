import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import TwoThumbs from "../Staff/Helpers/RangeSlider/RangeSlider";
import ProductList from "../ProductList";
import { apiUrl } from "../../server-config";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const [searchPrices, setSearchPrices] = useState([0, 50]);
  const [searchInventory, setSearchInventory] = useState([0, 100]);
  const navigate = useNavigate();

  useEffect(()=> {
    // fetch categories
    fetch(`${apiUrl}/api/categories`)
    .then(res => res.json())
    .then(data => {
        let newCategories = [];
        data.forEach(element => {
            element.categories.forEach((child) => newCategories.push({CategoryName: child, ParentCategory: element.ParentCategory}))
        });

        setCategories(newCategories);
    })
    .catch(err => alert(err));

}, [])

  const redirect = (productId) => {
    navigate(`/admin/products/${encodeURIComponent(productId)}`)
  }

  return (
    <div>
      {/* Search */}
      <div className="container mb-2">
        <div className="card border-0">
          <div className="row card-header text-start">
            <h5 class="col-10 ">Search</h5>
            <div className="col-2">
              <Link to="/admin/products/0">
                <button type="button" className="btn btn-success">
                  Add Product
                </button>
              </Link>
            </div>
          </div>
          <div claclassNames="card-body">
            <div className="card-text py-3">
              <form className="container text-start">
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="product-name">Product Name</label>
                    <input
                      id="product-name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="order-status">Category</label>
                    <Multiselect
                      displayValue="CategoryName"
                      groupBy="ParentCategory"
                      hideSelectedList
                      onKeyPressFn={function noRefCheck() {}}
                      onRemove={function noRefCheck() {}}
                      onSearch={function noRefCheck() {}}
                      onSelect={function noRefCheck() {}}
                      options={categories}
                      showCheckbox
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="price-range">Price Range</label>
                    <TwoThumbs
                      STEP={0.01}
                      MIN={0}
                      MAX={50}
                      values={searchPrices}
                      setValues={setSearchPrices}
                      dp={2}
                      color="var(--bs-green)"
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="inventory-level">Inventory Level</label>
                    <TwoThumbs
                      STEP={1}
                      MIN={0}
                      MAX={100}
                      values={searchInventory}
                      setValues={setSearchInventory}
                      dp={0}
                      color="var(--bs-green)"
                    />
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-3">
                    <button type="button" className="btn btn-success me-3">
                      Search
                    </button>
                    <button type="button" className="btn btn-light">
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <div>
        <ProductList handleClickProduct={redirect}/>
      </div>
    </div>
  );
};

export default Products;
