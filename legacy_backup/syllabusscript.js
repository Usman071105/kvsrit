const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Connect to MongoDB (replace with your own connection string)
mongoose.connect('mongodb://localhost/subjects', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define a schema for subjects
const SubjectSchema = new mongoose.Schema({
    name: String,
    pdfPath: String,
});

const SubjectModel = mongoose.model('Subject', SubjectSchema);

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

// Upload endpoint for adding subjects with PDFs
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const newSubject = new SubjectModel({
            name: req.body.name,
            pdfPath: req.file.path,
        });
        await newSubject.save();
        res.status(201).json(newSubject);
    } catch (error) {
        res.status(500).json({ message: "Error uploading file", error });
    }
});

// Get all subjects
app.get('/subjects', async (req, res) => {
    try {
        const subjects = await SubjectModel.find();
        res.json(subjects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching subjects", error });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});