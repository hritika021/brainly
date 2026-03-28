import express from 'express';
import Content from '../models/contentModel.js';
import { authMiddleware } from '../authMiddleware.js';
const router = express.Router();
router.post("/content", authMiddleware, async (req, res) => {
    console.log("Hit the content route");
    //@ts-ignore
    console.log("REQ.User.Id: ", req.userId);
    const link = req.body.link;
    const type = req.body.type;
    const title = req.body.title;
    await Content.create({
        link,
        type,
        title,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });
    return res.json({
        msg: "Content added"
    });
});
router.get('/content', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await Content.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
});
router.delete("/content", authMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
    console.log("Content ID to delete: ", contentId);
    await Content.deleteOne({
        _id: contentId
    });
});
router.post('/brain/share', async (req, res) => {
});
router.get('/brain:shareLink', async (req, res) => {
});
export default router;
