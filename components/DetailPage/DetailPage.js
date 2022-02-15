import classes from "./DetailPage.module.css";
import Image from "next/image";

export default function DetailPage(props) {
  return (
    <main className={classes.detailContainer}>
      <section className={classes.posterContainer}>
        <Image src="/magnum_force.jpg" alt="IMDb logo" width="580px" height="888px" />
      </section>
      <section className={classes.movieContainer}>
        <h1>Movie title</h1>
        <div className={classes.genericInfo}>
          <h6>12/25/1973</h6>
          <h6>Action, Crime, Mystery, Thriller</h6>
          <h6>2h 4m</h6>
          <h6>Trailer link</h6>
        </div>
        <div className={classes.imdbInfo}>
          <Image src="/imdb-icon.svg" alt="IMDb logo" width={64} height={32} />
          <div className={classes.imdbScore}>
            <span>7.2</span>/10
          </div>
        </div>
        <div className={classes.overviewContainer}>
          <h3>Overview</h3>
          <p>
            San Francisco Police Inspector &quot;Dirty&quot; Harry Callahan (Clint Eastwood) and his new partner,
            Earlington &quot;Early&quot; Smith (Felton Perry) have been temporarily reassigned from Homicide to Stakeout
            Duty. Meanwhile, those of the city&apos;s criminals who manage to avoid punishment by the courts are
            nevertheless being killed by unknown assassins. Callahan begins to investigate the murders despite orders
            from his superior officer, Lieutenant Neil Briggs (Hal Holbrook). A man has to know his limitations.
          </p>
        </div>
      </section>
    </main>
  );
}
