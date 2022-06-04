import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

  const minimunCharacters = 10;
  const [text, setText] = useState('');  
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleOnChange = (e) => {

    if (text === ''){
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= minimunCharacters) {
      setBtnDisabled(true);
      setMessage(`Text must be at least ${minimunCharacters} characters`);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us ?</h2>
            <RatingSelect select={(rating) => console.log(rating) } />
            <div className="input-group">
                <input type="text" 
                    placeholder='Write a review'
                    value={text}
                    onChange={handleOnChange} />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>  
            {message && <div className='message'>{message}</div>}          
        </form>
    </Card>
  )
}

export default FeedbackForm