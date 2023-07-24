import React, { useState, useEffect } from 'react'

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    }

    const handlePrev = () => {
        setActiveIndex((activeIndex + images.length - 1) % images.length);
    }

    const handleIndi = (index) => {
        setActiveIndex(index)
    }

    const getImageSize = (imageUrl) => {
        return new Promise((resolve, reject) => {
            const img = new Image();

            img.onload = () => {
                const width = img.width;
                const height = img.height;
                resolve({ width, height });
            };

            img.onerror = () => {
                reject(new Error('Failed to load the image.'));
            };

            img.src = imageUrl;
        });
    };

    const ratioDecider = (imageUrl) => {
        getImageSize(imageUrl)
            .then((size) => {
                const width = size.width;
                const height = size.height;
                console.log(`Image width: ${width}px, height: ${height}px`);
            })
            .catch((error) => {
                console.error(error.message);
            });

    }

    useEffect(() => {
        Promise.all(images.map((image) => getImageSize(image)))
            .then((sizes) => console.log(sizes))
            .catch((error) => console.error('Error loading image sizes:', error));
    }, [images]);

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {images.map((img, index) => (
                        <button
                            type="button"
                            key={index}
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={activeIndex === index ? 'active' : ''}
                            aria-current={activeIndex === index ? 'true' : 'false'}
                            aria-label="Slide 1"
                            onClick={() => handleIndi(index)}>
                        </button>
                    ))}
                </div>

                <div className="carousel-inner">
                    {images.map((img, index) => (
                        <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                            <img src={img} className="d-block w-100" alt={`Slide + ${index}`} />
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel