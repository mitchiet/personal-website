import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

type ImageWithSpinnerProps = {
  src: string;
  alt: string;
  className?: string;
  spinnerClassName?: string;
};

function ImageWithSpinner({ src, alt, className = '', spinnerClassName = '' }: ImageWithSpinnerProps) {
  const [loaded, setLoaded] = useState(false);

  const preloadAndDecode = (src: string): Promise<void> =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = async () => {
        try {
          if (img.decode) {
            await img.decode();
          }
        } catch {
          // Ignore decoding errors
        } finally {
          resolve();
        }
      };
      img.onerror = () => resolve();
    });

  useEffect(() => {
    const load = async () => {
      await preloadAndDecode(src);
      setLoaded(true);
    };
    load();
  }, [src]);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {!loaded && (
        <div className={`absolute inset-0 flex items-center justify-center ${spinnerClassName}`}>
          <LoadingSpinner />
        </div>
      )}
      {loaded && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => e.currentTarget.classList.add('loaded')}
        />
      )}
    </div>
  );
}

ImageWithSpinner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  spinnerClassName: PropTypes.string,
};

export default ImageWithSpinner;
