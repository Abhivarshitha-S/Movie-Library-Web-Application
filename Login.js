function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('/api/login', { email, password });
      console.log(res.data); // You can handle the response data here (e.g., store the JWT token)
    } catch (err) {
      console.error(err);
    }
  };
