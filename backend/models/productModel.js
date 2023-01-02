import mongoose from "mongoose"

const Product = mongoose.Schema({
    product: String,
    price: String,
    category: String,
    imageURL: String,
    kota: String
})

export default mongoose.model('products', Product)