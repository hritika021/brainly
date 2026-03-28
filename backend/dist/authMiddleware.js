import jwt from 'jsonwebtoken';
// interface AuthRequest extends Request{
//     userId?:string
// }
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        const parts = authHeader.split(' ');
        const token = parts[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //@ts-ignore
            req.userId = decoded.userId;
            next();
        }
        catch (err) {
            return res.status(401).json({
                msg: "Invalid or expired token"
            });
        }
    }
    else {
        return res.status(401).json({
            msg: "Authorization header missing or invalid"
        });
    }
};
