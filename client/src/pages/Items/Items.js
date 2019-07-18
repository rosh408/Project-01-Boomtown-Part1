import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Gravatar from "react-gravatar";

const Items = ({ classes }) => {
  return (
    <div>
      <p>
        This is the items page located at <code>/items</code>.
      </p>
    </div>
  );
};
const Header = () => 

function Item() {
  const items = [
    { id: 0, name: "Chair", description: "An Old chair" },
    { id: 1, name: "Table", description: "A new table" },
    { id: 2, name: "Coffee Maker", description: "Makes coffee" }
  ];
  return <div className="Item">
  <Header/>
  {items}
  <Gravatar />
  </div>;
}

export default withStyles(styles)(Items);