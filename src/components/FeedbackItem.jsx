import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem ({item, handleDelete}) {

    const handleClick = (id) => {
        console.log(`Todo: remove feedback with id ${id}`);
        handleDelete(id);
    };

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close'
                    onClick={() => handleClick(item.id)} >
                <FaTimes color='purple' />
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    );

}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;