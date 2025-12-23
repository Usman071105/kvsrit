const express = require('express');
const router = express.Router();
const News = require('../models/News');
const Course = require('../models/Course');
const Department = require('../models/Department');
const Faculty = require('../models/Faculty');
const Recruiter = require('../models/Recruiter');

// Helper: sanitize and build regex
const buildRegex = (q) => {
  const safe = String(q || '').trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(safe, 'i');
};

// GET /api/search?q=...&limit=20
router.get('/', async (req, res) => {
  const start = Date.now();
  const q = (req.query.q || '').trim();
  const limit = Math.min(parseInt(req.query.limit, 10) || 20, 50);

  // Logging: query received
  console.log(`[search] query="${q}" limit=${limit}`);

  if (!q) {
    return res.status(400).json({ message: 'Query parameter q is required' });
  }

  try {
    const rx = buildRegex(q);

    const [news, courses, departments, faculty, recruiters] = await Promise.all([
      News.find({ $or: [{ title: rx }, { category: rx }] })
        .sort({ createdAt: -1 }).limit(limit).lean(),
      Course.find({ $or: [{ name: rx }, { fullName: rx }, { type: rx }] })
        .limit(limit).lean(),
      Department.find({ $or: [{ name: rx }, { fullName: rx }, { code: rx }, { description: rx }] })
        .limit(limit).lean(),
      Faculty.find({ $or: [{ name: rx }, { department: rx }, { designation: rx }, { specialization: rx }] })
        .limit(limit).lean(),
      Recruiter.find({ name: rx }).limit(limit).lean(),
    ]);

    const results = [
      ...news.map(n => ({ type: 'news', title: n.title, category: n.category, date: n.date, link: n.link })),
      ...courses.map(c => ({ type: 'course', title: c.fullName, name: c.name, typeLabel: c.type })),
      ...departments.map(d => ({ type: 'department', title: d.fullName, code: d.code })),
      ...faculty.map(f => ({ type: 'faculty', title: f.name, dept: f.department, designation: f.designation })),
      ...recruiters.map(r => ({ type: 'recruiter', title: r.name })),
    ].slice(0, limit);

    const elapsed = Date.now() - start;
    console.log(`[search] results=${results.length} time=${elapsed}ms`);

    res.json({ query: q, count: results.length, timeMs: elapsed, results });
  } catch (error) {
    console.error('[search] error:', error);
    res.status(500).json({ message: 'Search failed', error: error.message });
  }
});

module.exports = router;
