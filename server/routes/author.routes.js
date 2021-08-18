const AuthorController = require('../controllers/author.controllers');

module.exports = (app) => {
    app.get("/api/author/getall", AuthorController.getAllAuthor);
    app.post("/api/author/addnew", AuthorController.createAuthor);
    app.get("/api/author/:id/getone", AuthorController.getOneAuthor);
    app.put("/api/author/:id/update", AuthorController.updateAuthor);
    app.delete("/api/author/:id/delete", AuthorController.deleteAuthor)
}