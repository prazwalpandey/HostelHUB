import { useState } from 'react';

const AdminLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label htmlFor="rememberMe">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />{' '}
        Remember me
      </label>

      <button type="submit">Sign in</button>

      <div>
        <a href="#student-login" onClick={(e) => e.preventDefault()}>
          Login to Student
        </a>
      </div>
    </form>
  );
};

export default AdminLoginForm;