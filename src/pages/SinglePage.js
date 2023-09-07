import { Link, useLocation } from "react-router-dom";
import {Button, Card} from 'react-bootstrap';

const SinglePage = (props) => {
    const location = useLocation();
    const data = location.state;
    return ( 
        <>
            <h1 className="text-warning p-2">{data.name}</h1>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <img src={data.image} className="w-100" />
                        </div>
                        <div className="col-6">
                            <h3>Synopsis:</h3>
                            <p>{data.desc}</p>
                            <Button variant="dark">
                                <Link to="/Sample_React_Repo_DeAsis">
                                    Go Back
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </>
     );
}
 
export default SinglePage;