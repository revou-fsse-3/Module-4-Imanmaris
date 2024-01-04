
import { useParams } from "react-router-dom";

const ProductContainer =() => {

    const{id} = useParams();

    return (
        <div>
            Product ini memiliki id : {id}
        </div>
    )
}
export default ProductContainer