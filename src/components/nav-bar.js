import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<div style={{
        textAlign: 'center', display: 'flex', marginTop: '40px',
        gap: '50px'
    }}>
        <Link to="/about" className='nav-link'>About us</Link>
        <Link to="/contact" className='nav-link'>Contact us</Link>
        {/* <a href="/about">About us</a> we can use both Link and a tag*/}
    </div>)
}

export default Navbar