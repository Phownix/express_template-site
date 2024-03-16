export class DocumentsController {
    static async Docs (req, res, next) {
        try {
            res.render("Pages/Docs/index");
        } catch (error) {
            next(error)
        }
    }
}