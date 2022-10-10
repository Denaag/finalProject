import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return(
        <div className='d-flex'>
        <Link to='/'  className="flex-end back-button">
        <Button>Back To Home</Button>
        </Link>  
      </div>
    )
}

export default BackToHome;