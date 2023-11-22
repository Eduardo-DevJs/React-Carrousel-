import useEmblaCarousel from 'embla-carousel-react';

const App = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
  ];

  return (
    <div className="container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {images.map(({id, url}) => (
            <div style={{backgroundImage:`url(${url})`, backgroundRepeat: "no-repeat"}} key={id} className="embla__slide"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
