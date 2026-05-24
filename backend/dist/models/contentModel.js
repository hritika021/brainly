import mongoose, { Types } from "mongoose";
const contentTypes = ["twitter", "article", "youtube"];
const contentSchema = new mongoose.Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag', required: true }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});
const Content = mongoose.model("Content", contentSchema);
export default Content;
