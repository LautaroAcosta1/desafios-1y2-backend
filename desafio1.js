class ProductManager {
    products = []
    quantyProductId = 0

    constructor() {}

    getProducts() {
        console.log(this.products)
    }

    addProducts(title, description, price, thumbnail, code, stock) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.log(title, "con código", code, "ya existe.");
        } else {
            const productId = ++this.quantyProductId;
            this.products.push({id: productId, title, description, price, thumbnail, code, stock });
            console.log("Producto agregado:", title);
        }
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            return "Not found";
        }
    }
}

const product = new ProductManager()

// Productos agregados:
product.addProducts("Samsung A71", "Black, Dimensions: 76 x 163.6 x 7.7 mm.", "$125.000", "image", "243-534", "15")
product.addProducts("Iphone 15", "White, with USB-C port.", "$2.000.000", "image", "243-531", "23")

// Ejemplo en el cual es encontrado el producto por su id y mostrado en consola.
const productById = product.getProductById(1);
console.log("Producto con ID 1:", productById);

// Ejemplo en el cual NO es encontrado el producto por su id y se muetra el mensaje "Not found" en consola.
const productByIdNotFound = product.getProductById(3);
console.log("Producto con ID 3:", productByIdNotFound);