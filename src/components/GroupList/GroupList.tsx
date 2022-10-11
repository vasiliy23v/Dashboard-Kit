import React from "react";
import { User as UserType } from "../../api/types"
import { Priority as PriorityType } from "../../api/types"
interface ItemsProp {
  items: PriorityType,
  onItemSelect: Function,
  selectedItem: UserType['priority'] | undefined,

}

const GroupList = ({ items, selectedItem, onItemSelect }: ItemsProp) => {
  return (
    <ul style={{
      display: "flex", gap: "10px", flexDirection: "column", padding: "0", cursor: "pointer"
    }}>
      {
        Object.keys(items).map((item) =>
          <li key={item} role="button" onClick={() => onItemSelect(items[item])} ><span style={{

            color: items[item] === selectedItem ? items[item].color : "",
            textDecoration: "underline" + (items[item] === selectedItem ? items[item].color : "")
          }}>{items[item].name}</span></li>)
      }

    </ul >
  );
};

export default GroupList;
