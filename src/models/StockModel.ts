export interface Category {
    name: string | null
}

export interface Product {
    name: string,
    price: number,
    brand: string | null,
    unitOfMeasure: 'Unidad' | 'Kilo' | null,
    category: Category
}
