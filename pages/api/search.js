async function search(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const response = await fetch(
      `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_API_KEY}/${data.text}`
    );
    const json = await response.json();
    res.status(200).json(JSON.stringify(json));
  }
}

export default search;
