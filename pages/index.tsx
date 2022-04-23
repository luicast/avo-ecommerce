import { useState, useEffect } from "react";
import Link from "next/link";

const index = () => {
    const [productList, setProductList] = useState<TProduct[]>([])
    useEffect(() => {
       window.fetch('/api/avo/')
            .then(res => res.json())
            .then(({data}) => setProductList(data))
    }, [])

    return (
        <>
            <div>
                <h1>welcome to index page</h1>
                {
                    productList.map(product => <p key={product.id}><Link href={`/product/${product.id}`}><a>{product.name}</a></Link></p>)
                }
            </div>
            
        </>
        
    );
}

export default index;