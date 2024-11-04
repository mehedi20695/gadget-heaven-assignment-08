import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const { product_id } = useParams();
    // eslint-disable-next-line no-unused-vars
    const data = useLoaderData();
    console.log(product_id);
    return (
        <div>
            <h3>Card details: {product_id}</h3>
        </div>
    );
};

export default CardDetails;