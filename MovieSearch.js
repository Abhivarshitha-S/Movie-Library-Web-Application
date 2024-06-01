function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`/api/movies?search=${searchTerm}`);
      setMovies(res.data.Search);
    } catch (err) {
      console.error(err);
    }
  };
