import classes from "./DetailPage.module.css";
import Image from "next/image";

export default function DetailPage({
  id,
  title,
  image,
  releaseDate,
  runtimeStr,
  plot,
  imDbRating,
  tagline,
  ...otherProps
}) {
  const rlsItems = releaseDate.split("-");
  const genreStr = otherProps.genreList.map((item) => item.value).join(", ");
  const directorItems = otherProps.directorList.map((person) => {
    return (
      <div key={`${person.id}__director`} className={classes.creditsItem}>
        <strong>{person.name}</strong>
        <p>Director</p>
      </div>
    );
  });
  const writerItems = otherProps.writerList.map((person) => {
    return (
      <div key={`${person.id}__writer`} className={classes.creditsItem}>
        <strong>{person.name}</strong>
        <p>Writer</p>
      </div>
    );
  });
  const creditItems = [...directorItems, ...writerItems];
  const castList = otherProps.actorList
    .filter((person, index) => index < 4)
    .map((person) => {
      return (
        <div key={person.id} className={classes.castItem}>
          <div className={classes.imgContainer}>
            <Image
              src={person.image}
              alt={person.name}
              width={96}
              height={96}
              layout="intrinsic"
              objectFit="scale-down"
            />
          </div>
          <strong>{person.name}</strong>
          <p>{person.asCharacter.replace(/as \S.+/i, "")}</p>
        </div>
      );
    });

  return (
    <main className={classes.detailContainer}>
      <section className={classes.posterContainer}>
        <Image src={image} alt={title} width="580px" height="888px" />
      </section>
      <section className={classes.movieContainer}>
        <div className={classes.titleContainer}>
          <h1>{title}</h1>
          <h2>&mdash; {tagline}</h2>
        </div>
        <div className={classes.genericInfo}>
          {rlsItems && <h6>{`${rlsItems[1]}/${rlsItems[2]}/${rlsItems[0]}`}</h6>}
          {genreStr && <h6>{genreStr}</h6>}
          {runtimeStr && <h6>{runtimeStr}</h6>}
        </div>
        <div className={classes.imdbInfo}>
          <Image src="/imdb-icon.svg" alt="IMDb logo" width={64} height={32} />
          <div className={classes.imdbScore}>{imDbRating ? <span>{imDbRating}</span> / 10 : "N/A"}</div>
        </div>
        <div className={classes.overviewContainer}>
          <h3>Overview</h3>
          <p>{plot}</p>
        </div>
        <div className={classes.creditsContainer}>{creditItems}</div>
        <hr className={classes.divider} />
        <div className={classes.castContainer}>{castList}</div>
      </section>
    </main>
  );
}
