import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({
  icon,
  image,
  title,
  description,
  buttonText,
  href,
  onButtonClick,
  variant = 'default',
  fullWidth = false,
  className = ''
}) => {
  const cardClass = [
    styles.card,
    styles[variant],
    fullWidth ? styles.fullWidth : ''
  ].join(' ');

  const cardContent = (
    <>
      {/* Show image if passed */}
      {image && (
        <img
          src={image}
          alt={title || 'Card image'}
          className={
            variant === 'resources' ? styles.resourceImage : styles.image
          }
        />
      )}

      {/* Fallback to icon if image not present */}
      {!image && icon && <div className={styles.iconContainer}>{icon}</div>}

      {/* Title */}
      {title && variant === 'resources' ? (
        <h3 className={styles.resourceTitle}>{title}</h3>
      ) : (
        <h3 className={styles.title}>{title}</h3>
      )}

      {description && variant !== 'resources' && (
        <p
          className={`${styles.description} ${variant === 'cta' ? styles.ctaDescription : ''
            }`}
        >
          {description}
        </p>
      )}

      {/* Button or Link */}
      {buttonText && variant !== 'resources' && (
        href ? (
          <Link
            to={href}
            className={`${styles.cardButton} ${
              variant === 'hero' || variant === 'cta' ? styles.heroButton : ''
            }`}
            style={
              variant === 'hero' || variant === 'cta'
                ? { backgroundColor: 'white', color: '#1d4ed8' }
                : {}
            }
          >
            {buttonText}
          </Link>
        ) : (
          <button
            className={styles.cardButton}
            onClick={onButtonClick}
            style={
              variant === 'hero' || variant === 'cta'
                ? { backgroundColor: 'white', color: '#1d4ed8' }
                : {}
            }
          >
            {buttonText}
          </button>
        )
      )}
    </>
  );

  // ✅ Wrap full resources card in a Link if href is provided
  if (variant === 'resources' && href) {
    return (
      <Link to={href} className={`${cardClass} ${className}`}>
        {cardContent}
      </Link>
    );
  }

  // Default return for all other cards
  return (
    <div className={`${cardClass} ${className}`}>
      {cardContent}
    </div>
  );
};

export default Card;
