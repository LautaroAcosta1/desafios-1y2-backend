const fs = require("fs")

class ProductManager {

    products = []
    quantyProductId = 0

    constructor() {}

    async addProduct(title, description, price, thumbnail, code, stock) {
        const productId = ++this.quantyProductId
        this.products.push({id: productId, title, description, price, thumbnail, code, stock})
        const productsString = JSON.stringify(this.products, null, 4)
        await fs.promises.writeFile("products.json", productsString)
    }

    async getProducts() {
        let productsOnFile = await fs.promises.readFile("products.json", "utf-8")
        productsOnFile = JSON.parse(productsOnFile)
        return productsOnFile
    }

    async getProductById(id) {
        let productsOnFile = await fs.promises.readFile("products.json", "utf-8")
        productsOnFile = JSON.parse(productsOnFile)
        const product = productsOnFile.find(product => product.id === id)
        if (product) {
            return product;
        } else {
            return "Not found";
        }
    }

    async updateProduct(id, updatedProduct) {
        let productsOnFile = await fs.promises.readFile("products.json", "utf-8");
        this.products = JSON.parse(productsOnFile);

        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            updatedProduct.id = id;
            this.products[index] = updatedProduct;
            const productsString = JSON.stringify(this.products, null, 4);
            await fs.promises.writeFile("products.json", productsString);
            return this.products[index];
        } else {
            return "Not found";
        }
    }

    async deleteProduct(id) {
        let productsOnFile = await fs.promises.readFile("products.json", "utf-8")
        productsOnFile = JSON.parse(productsOnFile)

        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            const productsString = JSON.stringify(this.products, null, 4);
            await fs.promises.writeFile("products.json", productsString);
            return "Product deleted";
        } else {
            return "Not found";
        }
    }
}

// Funcion de ejemplo en la cual se usan las funciones asincronicas definidas en la class "ProductManager".
async function example() {
    const product = new ProductManager()
    await product.addProduct("Iphone 15", "White, with USB-C port.", "$2.000.000", "image", "324-654", 34)
    await product.addProduct("Samsung A71", "Black, Dimensions: 76 x 163.6 x 7.7 mm.", "$125.000", "image", "567-545", 23)

    const ProductsList = await product.getProducts();
    console.log("Lista de Productos después de la actualización:");
    console.log(ProductsList);

    // Producto actualizado.
    const updatedProduct = {
        title: "Iphone 13",
        description: "Black, with USB-C port.",
        price: "$1.500.000",
        thumbnail: "image",
        code: "645-876",
        stock: 23
    };

    // Ejemplo en el cual busca al producto por su ID y es intercambiado por el producto actualizado.
    const updatedProductResult = await product.updateProduct(1, updatedProduct);
    console.log("Producto actualizado con ID 1:", updatedProductResult);

    // Lista de productos actualizada.
    const updatedProductsList = await product.getProducts();
    console.log("Lista de Productos después de la actualización:");
    console.log(updatedProductsList);

    // Ejemplo en el cual se busca al producto por su ID y es eliminado de la lista de productos.
    const deleteResult = await product.deleteProduct(2);
    console.log("Producto eliminado con ID 2:", deleteResult);
    }

example()