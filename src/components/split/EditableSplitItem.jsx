import { NumberInput } from "@mantine/core";

import InputQuantity from "components/shared/InputQuantity";

const EditableSplitItem = ({ splitItem, onItemEdit }) => {
  return (
    <div className="flex items-center justify-between space-x-2 rounded border border-blue-200 px-4 py-2">
      <div className="w-2/3">{splitItem.label}</div>

      <div className="w-2/3">
        <InputQuantity
          quantity={splitItem.quantity}
          step={1}
          onQuantityChange={(val) =>
            onItemEdit({ ...splitItem, quantity: val })
          }
        />
      </div>

      <div className="w-1/3">
        <NumberInput
          step={100}
          value={splitItem.unitPrice}
          onChange={(val) => onItemEdit({ ...splitItem, unitPrice: val })}
        />
      </div>
    </div>
  );
};

export default EditableSplitItem;
