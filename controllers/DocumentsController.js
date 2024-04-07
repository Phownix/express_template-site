export class DocumentsController {
    static async Docs (req, res, next) {
        try {
            res.render("Docs/index");
        } catch (error) {
            next(error)
        }
    }

    static async introduction (req, res, next) {
        try {
            res.render("Docs/introduction");
        } catch (error) {
            next(error)
        }
    }

    static async environmentSetup (req, res, next) {
        try {
            res.render("Docs/environment-setup");
        } catch (error) {
            next(error)
        }
    }

    static async projectStructure (req, res, next) {
        try {
            res.render("Docs/project-structure");
        } catch (error) {
            next(error)
        }
    }

    static async features (req, res, next) {
        try {
            res.render("Docs/features");
        } catch (error) {
            next(error)
        }
    }

    static async bestPractices (req, res, next) {
        try {
            res.render("Docs/best-practices");
        } catch (error) {
            next(error)
        }
    }

    static async faqs (req, res, next) {
        try {
            res.render("Docs/faqs");
        } catch (error) {
            next(error)
        }
    }
}