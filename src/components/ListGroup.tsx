import { Fragment} from "react";
import "./ListGroup.css"
function ListGroup(){

    const items: Array<string> = [
        'O nas',
        'Projekty',
        'Robomaticon',
    ];

    return (
        <Fragment>
            <div className="list-container">
                <div className="moja-lista">
                    {items.map(item => (
                        <div className="item" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ListGroup;