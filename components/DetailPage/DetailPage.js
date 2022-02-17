import classes from "./DetailPage.module.css";
import Image from "next/image";

export default function DetailPage({ id, title, image, releaseDate, runtimeStr, plot, imDbRating, ...otherProps }) {
  console.log(otherProps);
  const rlsItems = releaseDate.split("-");
  const genreStr = otherProps.genreList.map((item) => item.value).join(", ");
  const directorItems = otherProps.directorList.map((person) => {
    return (
      <div key={person.id} className={classes.creditsItem}>
        <strong>{person.name}</strong>
        <p>Director</p>
      </div>
    );
  });
  const writerItems = otherProps.writerList.map((person) => {
    return (
      <div key={person.id} className={classes.creditsItem}>
        <strong>{person.name}</strong>
        <p>Writer</p>
      </div>
    );
  });
  const creditItems = [...directorItems, ...writerItems];

  return (
    <main className={classes.detailContainer}>
      <section className={classes.posterContainer}>
        <Image src={image} alt={title} width="580px" height="888px" />
      </section>
      <section className={classes.movieContainer}>
        <h1>{title}</h1>
        <div className={classes.genericInfo}>
          <h6>{`${rlsItems[1]}/${rlsItems[2]}/${rlsItems[0]}`}</h6>
          <h6>{genreStr}</h6>
          <h6>{runtimeStr}</h6>
          <h6>Trailer link</h6>
        </div>
        <div className={classes.imdbInfo}>
          <Image src="/imdb-icon.svg" alt="IMDb logo" width={64} height={32} />
          <div className={classes.imdbScore}>
            <span>{imDbRating}</span>/10
          </div>
        </div>
        <div className={classes.overviewContainer}>
          <h3>Overview</h3>
          <p>{plot}</p>
        </div>
        <div className={classes.creditsContainer}>{creditItems}</div>
        <hr className={classes.divider} />
        <div className={classes.castContainer}>
          <div className={classes.castItem}>
            <strong>Clint Eastwood</strong>
            <p>Harry Calahan</p>
          </div>
          <div className={classes.castItem}>
            <strong>Hal Holbrook</strong>
            <p>Lt. Briggs</p>
          </div>
          <div className={classes.castItem}>
            <strong>Mitchell Ryan</strong>
            <p>McCoy</p>
          </div>
          <div className={classes.castItem}>
            <strong>David Soul</strong>
            <p>Davis</p>
          </div>
        </div>
      </section>
    </main>
  );
}
