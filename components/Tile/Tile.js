import classes from "./Tile.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function Tile(props) {
  const router = useRouter();

  function handleClick() {
    router.push(`${props.id}`);
  }

  return (
    <section className={classes.tileContainer}>
      <Image
        onClick={handleClick}
        src={props.image}
        alt={props.title}
        width={125}
        height={128}
        layout="intrinsic"
        objectFit="scale-down"
      />
      <h3 onClick={handleClick}>{props.fullTitle}</h3>
    </section>
  );
}

export default Tile;
