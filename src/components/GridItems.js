import {Button, Card} from 'react-bootstrap';


const GridItems = (props) => {
    return ( 
        <>
        <div className="col-4">
          <Card className='h-100'>
            <Card.Img variant="top" src={props.image} />
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {props.desc}
                </Card.Text>
              <Button variant="primary">Go somewhere</Button>
              </Card.Body>
          </Card>
          </div>
        </>
     );
}
 
export default GridItems;