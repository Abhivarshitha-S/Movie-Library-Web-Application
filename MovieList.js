function MovieList() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const res = await axios.get('/api/lists');
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    };
