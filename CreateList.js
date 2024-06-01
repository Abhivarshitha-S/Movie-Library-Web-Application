function CreateList() {
  const [listName, setListName] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/lists', { name: listName, isPublic });
      console.log(res.data);
      // Reset form fields or perform additional actions
    } catch (err) {
      console.error(err);
    }
  };
