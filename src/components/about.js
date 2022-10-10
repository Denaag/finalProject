import AboutContent from './about-content';
import BackToHome from './backButton';
import TermsContent from './terms';

const AboutPage = () => {

    return (<div className='m-5 text-white'>
        <h2 className="text-white text-center mt-5"> About Us</h2>
     <h5> What is Hollywood Blvd?</h5>
        <AboutContent />
        <TermsContent />
         <BackToHome />
    </div>)
}   

export default AboutPage;