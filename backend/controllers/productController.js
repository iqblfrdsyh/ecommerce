import Product from "../models/productModel.js"


// Get all product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// Insert Product
export const saveProduct = async (req, res) => {
    const product = new Product(req.body)
    try {
        const insertedProduct = await product.save()
        res.status(201).json(insertedProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


// Delete product
export const deleteProduct = async (req, res) => {
    try {
        const daletedProduct = await Product.deleteOne({ _id: req.params.id })
        res.status(200).json(daletedProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}