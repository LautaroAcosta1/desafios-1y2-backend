class ProductManager {
    products = []

    constructor() {}

    getProducts() {
        console.log(this.products)
    }

    addProducts(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log(title, "con código", code, "ya existe.");
        } else {
            this.products.push({ title, description, price, thumbnail, code, stock });
            console.log("Producto agregado:", title);
        }
    }
}

const product = new ProductManager()

product.addProducts("Samsung A71", "Black, Dimensions: 76 x 163.6 x 7.7 mm.", "$125.000", "image", "243-534", "15")
product.addProducts("Iphone 15", "White, with USB-C port.", "$2.000.000", "image", "243-531", "23")

console.log(product)