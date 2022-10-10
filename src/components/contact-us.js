//contact page - page 3
import BackToHome from './backButton';
import ContactForm from './form';
import './styles.css';

const ContactPage = () => {

    return (<div className='m-5 text-white'>
    <h2 className="text-white text-center mt-5"> Contact Us</h2>
    <h5 className="text-white text-center mt-4"> Let us know how we can improve and we will be sure to respond back to you!</h5>
     <ContactForm />
     <BackToHome />
</div>)
}

export default ContactPage;