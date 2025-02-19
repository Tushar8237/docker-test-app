import React, { useEffect, useState } from "react";

function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                if (data) {
                    setData(data);
                } else {
                    console.log("No data found");
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        };

        fetchData();
    }, []);

    console.log("Data: ", data);

    return (
        <div
            style={{
                maxWidth: "1460px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                margin: "0 auto",
                padding: "1rem",
            }}
        >
            {data &&
                data.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid grey",
                            padding: "1rem",
                            borderRadius: "5px",
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.category}</p>
                        <img
                            style={{
                                width: "100%",
                            }}
                            src={item.image}
                            alt={item.title}
                        />
                        <p>Price: {item.price} $</p>
                    </div>
                ))}
        </div>
    );
}

export default Product;
