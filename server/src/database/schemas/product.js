import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
    sn:Number,
    productName: String,
    customerName: String,
    quantity: Number,
    discount: Number,
    unitPrice: Number,
    shippingCost: Number,
    region: String,
    category: String,
    profitMargin: Number,
    key:String
});

const Product = mongoose.model('Product', productSchema);

export default Product;