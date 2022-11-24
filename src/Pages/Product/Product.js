import { Fragment } from "react"
import { useParams } from "react-router-dom"

const Product = () => {
    const params = useParams();
    console.log(params);
    return (
        <Fragment>
            
        </Fragment>
    )
}

export default Product