import { ErrorBase } from "./errorBase"

type ProductErrorName = 'PRODUCT_NOT_FOUND' | 'OUT_OF_STOCK'

class ProductError extends ErrorBase<ProductErrorName>{
    constructor(name: ProductErrorName){
        const messages = {
            PRODUCT_NOT_FOUND: {
                message: "Produto não encontrado!",
                status: 400
            },
            OUT_OF_STOCK: {
                message: "Produto esgotado!",
                status: 400
            }
        }
        super(name, messages[name].message, messages[name].status)
    }
}

throw new ProductError('OUT_OF_STOCK')
