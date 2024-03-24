import React, { useState } from "react";
import SortableTree from "../Staff/Helpers/SortableTree/SortableTree";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      id: "Frozen",
      children: [
        { id: "Ice Cream", children: [] },
        { id: "Frozen Meat & Seafood", children: [] },
      ],
    },
    {
      id: "Dairy & Eggs",
      children: [
        { id: "Milk", children: [] },
        { id: "Egg", children: [] },
        { id: "Cheese", children: [] },
      ],
    },
    {
      id: "Fruits & Vegetables",
      children: [
        { id: "Fresh Vegetables", children: [] },
        { id: "Fresh Fruits", children: [] },
        { id: "Herbs", children: [] },
        { id: "Dried Fruits & Nuts", children: [] },
      ],
    },
  ]);

  const onItemChange = (newItems) => {
    setCategories(newItems);
  };

  const [newCat, setNewCat] = useState("");
  const [showList, setShowList] = useState(true);

  const addCat = () => {
    const newState = [
      ...categories,
      {
        id: newCat,
        children: [],
      },
    ];
    setCategories(newState);
    setNewCat("");
    setShowList(false);
    setShowList(true);
  };

  return (
    <div classNames="container">
      {/* Add Category button */}
      <div className="row justify-content-end">
        <div className="col-auto">
          <button
            type="button"
            class="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#AddCategoryModal"
          >
            Add Category
          </button>
        </div>
      </div>
      {/* Category List */}
      <div className={showList ? "row my-3" : "row my-3 d-none"}>
        <ul class="list-group text-start">
          <SortableTree
            removable
            indicator
            defaultItems={categories}
            Dragged={onItemChange}
          />
        </ul>
      </div>
      {/* Add Category Popup */}
      <div
        class="modal fade"
        id="AddCategoryModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Category
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form className="container">
                <div className="row mb-3 gx-0 text-start">
                  <label htmlFor="cat-name">Category Name</label>
                  <input
                    id="cat-name"
                    type="text"
                    className="form-control"
                    onChange={(e) => setNewCat(e.target.value)}
                    value={newCat}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={addCat}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
