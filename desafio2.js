const fs = require("fs")

class ProductManager {

    products = []
    quantyProductId = 0

    constructor() {}

    async addProduct(id, title, description, price, thumbnail, code, stock) {
        const productId = ++this.quantyProductId
        this.products.push({id: productId, title, description, price, thumbnail, code, stock})
        const productsString = JSON.stringify(this.products, null, 4)
        await fs.promises.writeFile("products.json", productsString)
    }

    getProducts() {

    }

    getProductById() {

    }

    updateProduct() {

    }

    deleteProduct() {

    }
}
// Funcion de ejemplo en la cual se usan las funciones asincronicas definidas en la class "ProductManager".
async function example() {
    const products = new ProductManager()
    await products.addProduct("Iphone 15", "White, with USB-C port.", "$2.000.000", "image", "324-654", 34)
    await products.addProduct("Samsung A71", "Black, Dimensions: 76 x 163.6 x 7.7 mm.", "$125.000", "image", "567-545", 23)
}

example()