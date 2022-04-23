import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductItem = () => {
  const [avo, setAvo] = useState<TProduct>();
  const { query: { id }} = useRouter();
  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then((data) => setAvo(data))
      
  }, [id])

  return (
    <div>
      <h1>Product page</h1>
        <h3>{avo?.name}</h3>
        <p>{avo?.sku}</p>
        <p>{avo?.price}</p>
        <p>{avo?.attributes.description}</p>
        <img src={avo?.image} alt={avo?.name} />
     
    </div>
  )
}

export default ProductItem