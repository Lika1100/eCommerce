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
    function goToChosenPage(chosenPage: number | string) {
        navigate(`/${chosenPage}`)
    }
    return {
        back,
        next,
        goToProduct,
        backToProducts,
        goToChosenPage
    }
}

export default useNavigatePages