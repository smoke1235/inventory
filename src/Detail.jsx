
import { useParams } from "react-router";

function Detail () {
    let { id } = useParams();
    return (
        <div>detail {id}</div>
    )
}

export default Detail;