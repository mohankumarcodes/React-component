import ListGroups from "./components/ListGroups.tsx";

import Button from "./components/Button";

import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const items = ["France", "India", "Russia", "USA", "China", "Korea"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [visible,setVisible]=useState(false);

  return (
    <div>
      <ListGroups
        items={items}
        heading={"Countries"}
        onSelectItem={handleSelectItem}
      />

      {visible && <Alert onClose={()=>setVisible(false)}>Hello <span>World</span></Alert>}
        <Button color="primary" onClick={()=>setVisible(true)}>Show Alert!</Button>
    </div>
  );
}
export default App;
