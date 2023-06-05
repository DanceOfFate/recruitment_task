import { ContactForm } from '../../components/contactForm';
import FormInput from '../../components/formInput';
import Heading from '../../components/heading';
import Text from '../../components/text';
import contactModel from '../../models/Contact.model';
import './index.css';




const Contact = () => {

  return (
    <div className="contact">
      <div className='contact-container'>
        <div className='content'>
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.text}</Text>
        </div>
        <ContactForm />
      </div>
    </div>
  )
};

export default Contact;


const styles = StyleSheet