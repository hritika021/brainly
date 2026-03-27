import express from 'express';
import Content from '../models/contentModel.js';
const router = express.Router();
router.post("/content", async (req, res) => {
    const content = req.body;
    const newContent = await Content.create(content);
    res.json({
        msg: "Content added",
        newContent
    });
});
router.get('/content', async (req, res) => {
});
router.delete("/content", async (req, res) => {
});
router.post('/brain/share', async (req, res) => {
});
router.get('/brain:shareLink', async (req, res) => {
});
export default router;
