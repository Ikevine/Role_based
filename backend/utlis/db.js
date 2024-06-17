import mongoose from "mongoose";


const DbCon=async()=>{
    try {
       await mongoose.connect("mongodb+srv://ikevine:ikevine@cluster0.fk9vsua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
       console.log('mongo db is connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbCon