import mongoose from "mongoose"

const Product = mongoose.Schema({
    product: String,
    price: String,
    // realPrice: String,
    // discountPrice: String,
    category: String,
    imageURL: String,
    rate: Number,
    kota: String,
    sold: String
})

export default mongoose.model('page3', Product)