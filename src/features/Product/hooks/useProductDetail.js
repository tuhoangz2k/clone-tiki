import procductApi from 'api/productApi';
import { useState, useEffect } from 'react';
function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await procductApi.get(productId);
        setProduct(result);
      } catch (error) {
        console.log('failed to fetch product', error);
      }
      setLoading(false);
    })();
  }, [productId]);
  return {
    product,
    loading,
  };
}
export default useProductDetail;
