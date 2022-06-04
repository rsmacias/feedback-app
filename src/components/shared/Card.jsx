function Card({children, reverse}) {
    const cardStyles = {
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000'
    }

    return (
    <div className='card' style={cardStyles}>
        {children}
    </div>
  )
}

export default Card