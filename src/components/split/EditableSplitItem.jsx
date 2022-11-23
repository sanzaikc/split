import React from "react";

import InputQuantity from "components/shared/InputQuantity";

const EditableSplitItem = ({ label, unitPrice, quantity, onItemEdit }) => {
  return (
    <div className="flex items-center justify-between space-x-2 rounded border border-blue-200 px-4 py-2">
      <div>{label}</div>
      <div>
        <InputQuantity
          quantity={quantity}
          step={1}
          onQuantityChange={(val) =>
            onItemEdit({ label, unitPrice, quantity: val })
          }
        />
      </div>
      <div>{unitPrice}</div>
    </div>
  );
};

export default EditableSplitItem;
