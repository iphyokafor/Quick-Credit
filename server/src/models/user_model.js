module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
    });

    return User;
};