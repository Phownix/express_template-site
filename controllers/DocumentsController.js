export class DocumentsController {
    static async Docs (req, res, next) {
        try {
            res.render("Docs/index");
        } catch (error) {
            next(error)
        }
    }
}