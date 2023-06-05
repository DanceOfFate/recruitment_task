import Image from '../image'
import Heading from '../heading';
import Text from '../text';
import './index.css'
import { Button } from '../button';



const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <form>
          <Button 
            buttonClass="text-button"
            type="submit"
            formaction={link}
          >
            Read More
          </Button>
        </form>
      </div>
    </div>
  )
};

export default ImageCard;
