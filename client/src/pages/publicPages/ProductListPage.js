import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import TwoThumbs from "../../component/Staff/Helpers/RangeSlider/RangeSlider";
import ProductList from "../../component/ProductList";
import { apiUrl } from "../../server-config";

const ProductListPage = () => {
  const [categories, setCategories] = useState([]);

  const [searchPrices, setSearchPrices] = useState([0, 50]);

  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // fetch categories
    fetch(`${apiUrl}/api/categories`)
      .then((res) => res.json())
      .then((data) => {
        let newCategories = [];
        data.forEach((element) => {
          element.categories.forEach((child) =>
            newCategories.push({
              CategoryName: child,
              ParentCategory: element.ParentCategory,
            })
          );
        });

        setCategories(newCategories);
      })
      .catch((err) => alert(err));
  }, []);

  const redirect = (productId) => {
    navigate(`/productlist/${encodeURIComponent(productId)}`);
  };

  return (
    <div className="row public">
      {/* Search */}
      <div className="col-12 col-md-3 border-end">
        <div className="card m-3">
          <div className="card-body">
            <div className="card-header">Filters</div>
            <form className="container text-start p-2">
              <div className="row mb-3">
                <div className="col-12">
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
              <div className="row justify-content-between">
                <div className="col-12">
                  <label htmlFor="price-range">Price</label>
                  <TwoThumbs
                    STEP={0.01}
                    MIN={0}
                    MAX={50}
                    values={searchPrices}
                    setValues={setSearchPrices}
                    dp={2}
                  />
                </div>
                <div className="col-12 d-grid gap-2">
                  <button type="button" className="btn btn-custom-primary">
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
      {/* Table */}
      <div className="col-12 col-md-9">
        <ProductList
          category={state ? state.category : ""}
          handleClickProduct={redirect}
        />
      </div>
    </div>
  );
};

export default ProductListPage;
