import DetailPage from "../../components/DetailPage/DetailPage";

function MovieDetailPage(props) {
  return <DetailPage {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          titleId: "tt1375666" /* Inception */,
        },
      },
      {
        params: {
          titleId: "tt0070355" /* Magnum force */,
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const titleId = context.params.titleId;

  const response = await fetch(`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_API_KEY}/${titleId}`);
  const data = await response.json();

  return {
    props: data,
    revalidate: 10,
  };
}

export default MovieDetailPage;
