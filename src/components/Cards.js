import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-semibold mb-6 text-white'>Sample Books Generated by BookAI</h1>
      <p className='mb-14 text-white'>Explore some of the captivating books created using our AI technology.</p>
      <div className='flex flex-wrap justify-center gap-6'>
        <Card style={{ width: '18rem', backgroundColor: 'rgb(255, 255, 255, 0.05)', padding: '20px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', marginRight: '45px' }} className='cards'>
          <Card.Img variant="top" src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png" style={{ height: '200px', objectFit: 'cover', borderRadius: '7px' }} />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card.Title className='font-bold text-xl mt-2'>Science Fiction</Card.Title>
            <Card.Text style={{ color: '#b3b3b3' }}>
              "As Dr. Elara stepped through the shimmering portal, she knew there was no turning back. The fate of two universes now rested in her hands..."
            </Card.Text>
            <Button className="read-more">Read More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', backgroundColor: 'rgb(255, 255, 255, 0.05)', padding: '20px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease', marginRight: '45px' }} className='cards'>
          <Card.Img variant="top" src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/mist.png" style={{ height: '200px', objectFit: 'cover', borderRadius: '7px' }} />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card.Title className='font-bold text-xl mt-2'>Science Fiction</Card.Title>
            <Card.Text style={{ color: '#b3b3b3' }}>
            "The old lighthouse stood silent, its beacon long extinguished. But on foggy nights, some swore they could still see its ghostly light..."
            </Card.Text>
            <Button className="read-more">Read More</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', backgroundColor: 'rgb(255, 255, 255, 0.05)', padding: '20px', borderRadius: '7px', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease' }} className='cards'>
          <Card.Img variant="top" src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/ecos.png" style={{ height: '200px', objectFit: 'cover', borderRadius: '7px' }} />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Card.Title className='font-bold text-xl mt-2'>Science Fiction</Card.Title>
            <Card.Text style={{ color: '#b3b3b3' }}>
            "The ancient prophecy spoke of a child born with starlight in their eyes. As the comet blazed overhead, the kingdom held its breath..."
            </Card.Text>
            <Button className="read-more">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
