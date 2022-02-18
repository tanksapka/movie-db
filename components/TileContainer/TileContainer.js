import Tile from "../Tile/Tile";
import classes from "./TileContainer.module.css";

function TileContainer(props) {
  const tileList = props.items.map((item) => <Tile key={item.id} {...item} />);

  return <div className={classes.tileContainer}>{tileList}</div>;
}

export default TileContainer;
