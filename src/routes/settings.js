import express from 'express';
import { Setting } from '../models/setting';

const router = express.Router();

router.get('/settings', async (req, res) => {
    try {
        const settings = await Setting.find({});
        res.json(settings);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
})

router.post('/settings', async (req, res) => {
    try {
        const { settings } = req.body;
        const setting = new Setting({ settings });
        await setting.save();
        res.status(201).json({ message: 'Setting created' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
})

router.put('/settings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { settings } = req.body;
        const setting = await Setting.findByIdAndUpdate(id, { settings });

        if (!setting) {
            return res.status(400).json({ message: 'Setting not found' });
        } else {
            res.status(200).json({ setting })
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
})

router.delete('/settings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const setting = await Setting.findByIdAndDelete(id);
        res.json({ message: 'Setting deleted' })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Something went wrong, try again' });
    }
})

export default router;
