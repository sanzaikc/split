import React from "react";

import { Button, MultiSelect } from "@mantine/core";

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

  const [detailedSplitables, setDetailedSplitables] = React.useState([]);

  React.useEffect(() => {
    splitables.map((el) => ({
      item: el.value,
      quantity: 1,
      price: 0,
    }));
  }, [splitables]);

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
        data={[]}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => {
          const item = { value: query, label: query };
          setSplitables((current) => [...current, item]);
          return item;
        }}
      />

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
