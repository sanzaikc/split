import React from "react";

import { NumberInput, Group, ActionIcon } from "@mantine/core";

const InputQuantity = ({
  quantity,
  onQuantityChange,
  step = 2,
  min = 0,
  max = 10,
}) => {
  //   const [value, setValue] = React.useState(0);
  const handlers = React.useRef();

  return (
    <Group spacing={5}>
      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={quantity}
        onChange={(val) => onQuantityChange(val)}
        handlersRef={handlers}
        max={max}
        min={min}
        step={step}
        styles={{ input: { width: 54, textAlign: "center" } }}
      />

      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default InputQuantity;
