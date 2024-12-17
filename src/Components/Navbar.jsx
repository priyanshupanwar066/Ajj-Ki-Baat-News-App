const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-6">Ajj Ki Baat</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { label: "Technology", value: "technology" },
              { label: "Business", value: "business" },
              { label: "Health", value: "health" },
              { label: "Sports", value: "sports" },
              { label: "Entertainment", value: "entertainment" },
            ].map((category) => (
              <li className="nav-item" key={category.value}>
                <div
                  className="nav-link"
                  onClick={() => setCategory(category.value)}
                  style={{ cursor: "pointer" }}
                >
                  {category.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
