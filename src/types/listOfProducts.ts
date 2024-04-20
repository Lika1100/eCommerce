interface Category {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
}

interface ListOfProducts {
    id: number,
    title?: string,
    price?: number,
    description?: string,
    images: string[],
    category: Category,
}

export default ListOfProducts
