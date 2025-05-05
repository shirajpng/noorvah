import data from "config/products.json"

export default function Page() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10 mb-6">
            {data.products.filter((product) => product.is_featured == true).map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-42 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2">Description of product {index + 1}.</p>
                    {/* <p className="text-xl font-bold">Rs {product.price}</p> */}
                </div>
            ))}
        </div>
    );
}