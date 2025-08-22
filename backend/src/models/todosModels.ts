import mongoose from "mongoose";
const {Schema , model} = mongoose;


const todosSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  isCompleted: Boolean,
  createdAt: Date,
  updatedAt: Date

})

const Todos = mongoose.model('Todos',todosSchema)

module.exports = Todos