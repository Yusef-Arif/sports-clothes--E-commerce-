const Header = () => {
  return (
    <header>
      <nav className="bg-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-main text-2xl font-extrabold">Sport</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>New Arrivals</a>
            </li>
            <li>
              <a>Categories</a>
            </li>
          </ul>
          <div className="flex items-center gap-2 bg-graybg p-3 rounded-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text"  className="border-none outline-none pr-6" placeholder="Search for products..." />
          </div>
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
