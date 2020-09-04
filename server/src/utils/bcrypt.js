import bcrypt from 'bcryptjs';

export default class bcryptHelper {
    static hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    }

    static comparePassword(hashPassword, password) {
        return bcrypt.compareSync(password, hashPassword);
    }
}