import { useState } from "react"
import { Button } from "../button"
import FormInput from "../formInput"
import "./index.css"

const INITIAL_INPUT_STATE = {
    first_name: "",
    last_name: "",
    service_information: "",
}

export const ContactForm = () => {
    const [formData, setFormData] = useState(INITIAL_INPUT_STATE)
    const [phoneNumber, setPhoneNumber] = useState("");
    
    const styles = {
        nameInputStyle: {
          marginTop: "0.4rem"
        },
        fullWidthInputs: {
          width: "100%", 
          marginTop: 0
        }
      }

    const handleTextInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    const handlePhoneNumberInputChange = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value)
        setPhoneNumber(formattedPhoneNumber);
        console.log(phoneNumber);
    }

    const handleOnSubmit = () => {
      setFormData({
        ...formData,
        phone_number: phoneNumber
      })
      console.log(formData);
    }

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`
        }
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;
    }

    return (
        <div className='form-section'>
          <div className='names'>
            <FormInput 
              placeholder="First name" 
              style={styles.nameInputStyle}
              name="first_name"
              value={formData.first_name}
              onChange={handleTextInputChange}  
            />
            <FormInput 
              placeholder="Last name"
              style={styles.nameInputStyle}
              name="last_name"
              value={formData.last_name}
              onChange={handleTextInputChange}  
            />
          </div>
          <div>
            <FormInput 
              style={styles.fullWidthInputs}
              placeholder="Phone number"
              value={phoneNumber} 
              onChange={handlePhoneNumberInputChange}
            />
            <FormInput 
              style={styles.fullWidthInputs} 
              placeholder="What Service are you interested in?"
              name="service_information"
              value={formData.service_information}
              onChange={handleTextInputChange}  
            />
          </div>
          <div className="button-container">
            <Button 
              buttonClass="secondary-button"
              onClick={handleOnSubmit}
              type="button"
              disabled={!formData.first_name || !formData.last_name || !phoneNumber || formData.service_information}
              >
                Submit now
             </Button>
          </div>
        </div>
    ) 
}