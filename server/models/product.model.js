import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:Array,
        default:[]
    },
    category:[
        {
            type:mongoose.Schema.ObjectId,
            ref: "category"
        }
    ],
    subCategory:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"subCategory"
        }
    ],
    unit:{
        type:String,
        default:''
    },
    stock:{
        type:Number,
        default:null
    },
    price:{
        type:Number,
        default:null
    },
    discount:{
        type:Number,
        default:null
    },
    description:{
        type:String,
        default: "n"
    },
    more_details:{
        type:Object,
        default:{}
    },
    public:{
        type: Boolean,
        default:true
    }
},{
    timestamps:true
})

const ProductModel = mongoose.model('product',productSchema)

export default ProductModel