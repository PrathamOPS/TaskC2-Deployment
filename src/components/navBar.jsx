import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        DEV@Deakin
      </Link>

      <form
        className="nav-search"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      <div className="nav-auth">
        <button
          type="button"
          onClick={() => navigate('/post')}
        >
          Post
        </button>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar