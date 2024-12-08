import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    orderId:{
        type:String,
        required:[true,"Provide order ID"],
        unique: true
    },
    productId:{
        type: mongoose.Schema.ObjectId,
        ref: "product"
    }, 
    product_details:{
        name:String,
        image:Array,
    },
    paymentId:{
        type:String,
        default:""
    },
    payment_status:{
        type:String,
        default:""
    },
    delivery_address:{
        type:mongoose.Schema.ObjectId,
        ref:'address'
    },
    subTotalAmount:{
        type:Number,
        default:null
    },
        totalAmount:{
            type:String,
            default:null
        },
        invoice_recipt:{
            type:String,
            default:""
        }

    
},{
    timestamps:true
})

const orderModel = mongoose.model("order",orderSchema)

export default orderModel