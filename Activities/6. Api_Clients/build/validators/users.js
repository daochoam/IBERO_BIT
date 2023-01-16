"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsers = exports.validateAddress = exports.validatePhone = exports.validateAge = exports.validateLastName = exports.validateName = exports.validateID = exports.validateResult = void 0;
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (err) {
        res.status(403);
        res.send({ errors: err.array() });
    }
};
exports.validateResult = validateResult;
exports.validateID = [
    (0, express_validator_1.check)('CC')
        .exists()
        .not().isEmpty()
        .isInt()
        .isLength({ min: 6 })
];
exports.validateName = [
    (0, express_validator_1.check)('name')
        .exists()
        .not().isEmpty()
        .isString()
        .isLength({ min: 3, max: 10 })
];
exports.validateLastName = [
    (0, express_validator_1.check)('lastName')
        .exists()
        .not().isEmpty()
        .isString()
        .isLength({ min: 3, max: 10 })
];
exports.validateAge = [
    (0, express_validator_1.check)('age')
        .exists()
        .not().isEmpty()
        .isInt({ min: 0, max: 120 })
];
exports.validatePhone = [
    (0, express_validator_1.check)('phone')
        .exists()
        .not().isEmpty()
        .isInt()
        .isLength({ min: 7 })
];
exports.validateAddress = [
    (0, express_validator_1.check)('address')
        .exists()
        .not().isEmpty()
        .isString()
];
exports.validateUsers = [
    exports.validateID[0],
    exports.validateName[0],
    exports.validateLastName[0],
    exports.validateAge[0],
    exports.validatePhone[0],
    exports.validateAddress[0]
];
