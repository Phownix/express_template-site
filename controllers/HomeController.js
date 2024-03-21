export class HomeController {
    static async Home (req, res, next) {
        try {
            res.render("Home/index");
        } catch (error) {
            next(error)
        }
    }
}