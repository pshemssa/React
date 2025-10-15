import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        style={{
          padding: "10px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }} className='fixed w-full top-0  bg-blue-400'
      >
        <h2 className='font-bold'>CureHelp</h2>

        <div>
          <Link
            to="/"
           className='m-5 font-bold'
          >
            Home
          </Link>
          <Link
            to="/doctors"
            className='m-5 font-bold'
          >
            Doctors
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
