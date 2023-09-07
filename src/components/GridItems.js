import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GridItems = (props) => {
  let information = {
    name: props.name,
    image: props.image,
    desc: props.desc 
  }
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
              <Button variant="dark">
                <Link to="/Sample_React_Repo_DeAsis/SinglePage" state={information}>
                Learn More
                </Link>
              </Button>
              </Card.Body>
          </Card>
          </div>
        </>
     );
}
 
export default GridItems;