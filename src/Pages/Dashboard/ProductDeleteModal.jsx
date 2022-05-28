import axios from "../../utility/axios";
import React from "react";
import { toast } from "react-toastify";

const ProductDeleteModal = ({ setProductId, productId, refetch }) => {
  const handleProductDelete = async () => {
    const { data } = await axios.delete(`products/${productId}`);
    if (data._id) {
      setProductId("");
      refetch();
      toast.success("Product Deleted");
    }
  };
  return (
    <>
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 className="font-bold text-lg text-center text-red-500">
            Are you sure you want to delete this product ?
          </h3>
          <p className="py-4 text-center">
            You will not be able to
            <span className="text-red-500 font-bold"> recover</span> this
            product
          </p>
          <div class="modal-action">
            <label for="product-delete-modal" class="btn">
              cancel delete
            </label>
            <button onClick={handleProductDelete} className="btn">
              delete product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDeleteModal;
