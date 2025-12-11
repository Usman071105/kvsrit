const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Connect to MongoDB (make sure to replace with your own connection string)
mongoose.connect('mongodb://localhost/attendance', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define a schema for uploaded files
const FileSchema = new mongoose.Schema({
    year: String,
    section: String,
    filename: String,
    filepath: String,
    dateUploaded: { type: Date, default: Date.now },
});

const FileModel = mongoose.model('File', FileSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const newFile = new FileModel({
            year: req.body.year,
            section: req.body.section,
            filename: req.file.originalname,
            filepath: req.file.path,
        });
        await newFile.save();
        res.status(201).json(newFile);
    } catch (error) {
        res.status(500).json({ message: "Error uploading file", error });
    }
});

// Get all uploaded files
app.get('/files', async (req, res) => {
    try {
        const files = await FileModel.find();
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: "Error fetching files", error });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});