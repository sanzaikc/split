import React from "react";

import { Button, MultiSelect } from "@mantine/core";
import EditableSplitItem from "./EditableSplitItem";

const data = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
];

const SplitForm = () => {
  const [splitMates, setSplitMates] = React.useState([]);

  const [splitables, setSplitables] = React.useState([]);

  const [detailedSplitables, setDetailSplitables] = React.useState([]);

  // methods
  function handleSplitableItem(newItem) {
    setSplitables((current) => [...current, newItem]);

    setDetailSplitables((prev) => [
      ...prev,
      {
        label: newItem.label,
        item: newItem.value,
        quantity: newItem?.quantity ?? 1,
        unitPrice: newItem?.unitPrice ?? 0,
      },
    ]);
  }

  function handleEditItem(item) {
    setDetailSplitables((prev) =>
      prev.map((el) => (el.label === item.label ? { ...el, ...item } : el))
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <MultiSelect
        value={splitMates}
        onChange={setSplitMates}
        data={data}
        clearable
        label="Split Mates"
        placeholder="Select split mates to split the bill with"
      />

      <MultiSelect
        label="Split Items"
        data={splitables}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => {
          const item = { value: query, label: query };
          handleSplitableItem(item);
          return item;
        }}
      />

      {detailedSplitables.map((el, index) => (
        <EditableSplitItem key={index} {...el} onItemEdit={handleEditItem} />
      ))}

      <div className="mx-auto w-2/3">
        <Button fullWidth variant="outline">
          Create Split
        </Button>
      </div>

      <pre>{JSON.stringify(detailedSplitables, null, 2)}</pre>
    </div>
  );
};

export default SplitForm;
