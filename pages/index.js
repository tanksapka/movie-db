import DetailPage from "../components/DetailPage/DetailPage";

export default function Home() {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <div>
      <DetailPage />
    </div>
  );
}
