import models from '../models';
const { users } = models;
import jwtHelper from '../utils/jwt';
import bcryptHelper from '../utils/bcrypt';
const { generateToken } = jwtHelper;
const { hashPassword, comparePassword } = bcryptHelper;

export default class userController {
    static async registerUsers(req, res) {
        try {
            const { firstName, lastName, email, status, address, isAdmin } = req.body;

            //hash password
            req.body.password = await hashPassword(req.body.password);
            // check for duplicate email address
            const checkEmail = await users.findOne({
                where: {
                    email,
                },
            });

            if (checkEmail) {
                res.status(400).json({
                    message: 'Email has been used by another person',
                });
            }
            const user = await users.create(req.body);

            const token = await generateToken({ user });
            const data = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                status: user.status,
                address: user.address,
                isAdmin: user.isAdmin,
            };
            data.token = token;
            delete user.password;
            return res.status(201).json({
                message: 'welcome to Quick Credit App',
                data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}