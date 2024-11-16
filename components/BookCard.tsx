import React from 'react';

interface BookCardProps {
  title: string;
  description: string;
  coverImage: string;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = React.memo(({ title, description, coverImage, onClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/150'; // URL to a default placeholder image
  };

  return (
    <div style={cardStyle} onClick={onClick} aria-label={`View details for ${title}`}>
      <img src={coverImage} alt={title} style={imageStyle} onError={handleImageError} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
});

const cardStyle = {
  width: '200px',
  padding: '1rem',
  borderRadius: '5px',
  backgroundColor: '#f8eadd',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  marginBottom: '1.5rem',
  marginRight: '1.6rem',
};

const imageStyle = {
  width: '100%',
  aspectRatio: '1',
  borderRadius: '5px',
};

const contentStyle = {
  marginTop: '1rem',
};

const titleStyle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: '#000',
};

const descriptionStyle = {
  fontSize: '0.8rem',
  color: '#888',
};

export default BookCard;
