import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Grid,
  Checkbox,
} from "@chakra-ui/react";

import React from "react";

const ListView = ({ Header, List, SelectedMap, onSelect, onDeselect }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>{Header}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={0}>
            {List.map((t) => {
              if (SelectedMap[t]) {
                return (
                  <Checkbox
                    key={t}
                    colorScheme="red"
                    defaultIsChecked
                    onChange={() => onDeselect(t)}
                  >
                    {t}
                  </Checkbox>
                );
              } else
                return (
                  <Checkbox
                    key={t}
                    colorScheme="red"
                    onChange={() => onSelect(t)}
                  >
                    {t}
                  </Checkbox>
                );
            })}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ListView;
