import { useNavigate } from "react-router-dom";

function useNavigatePages(page: string) {
    const navigate = useNavigate();
    function back() {
        navigate(`/${+page - 1}`)
    }
    function next() {
        navigate(`/${+page + 1}`)
    }
    function goToProduct(productId: number) {
        navigate(`${productId}`)
    }
    function backToProducts() {
        navigate(`/${page}`)
    }
    
    return {
        back,
        next,
        goToProduct,
        backToProducts,
    }
}

export default useNavigatePages