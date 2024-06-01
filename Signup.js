function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('/api/signup', { email, password });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };
