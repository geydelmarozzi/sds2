import ProductCard from "./ProductCard";
import { Product } from "./types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
    return selectedProducts.some(item => item.id === product.id)
}

export function formatPrice(price: number) {
    const fromatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BLR',
        minimumFractionDigits: 2
    })

    return fromatter.format(price)
}