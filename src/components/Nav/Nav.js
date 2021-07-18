import './Nav.css';

const Nav  = () => {
    return(
        <div className='nav'>
          <img src='logo-pied-piper.png' className="appLogo" alt="logo" />
          <button className='actBtn'>Cast</button>
          <button className='inactBtn'>Episodes</button>  
        </div>
    );
};

export default Nav;