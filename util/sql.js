const sql = {
  getAll: 'SELECT * from content',
  addOne: 'INSERT INTO content (name, story, created_at) VALUES (?, ?, ?)'
}

module.exports = sql