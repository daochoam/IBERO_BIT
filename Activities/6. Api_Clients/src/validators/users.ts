import { Request, Response, NextFunction } from 'express';
import { check, validationResult} from 'express-validator';

export const validateResult = (req:Request, res:Response, next:NextFunction) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err: any) {
        res.status(403)
        res.send({ errors: err.array() })
    }
}

export const validateID = [
    check('CC')
        .exists()
        .not().isEmpty()
        .isInt()
        .isLength({ min: 6 })

]

export const validateName = [
    check('name')
        .exists()
        .not().isEmpty()
        .isString()
        .isLength({ min: 3, max: 10 })
]

export const validateLastName = [
    check('lastName')
        .exists()
        .not().isEmpty()
        .isString()
        .isLength({ min: 3, max: 10 })
]

export const validateAge = [
    check('age')
        .exists()
        .not().isEmpty()
        .isInt({ min: 0, max: 120 })
]

export const validatePhone = [
    check('phone')
        .exists()
        .not().isEmpty()
        .isInt()
        .isLength({ min: 7 })
]

export const validateAddress = [
    check('address')
        .exists()
        .not().isEmpty()
        .isString()
]

export const validateUsers = [
    validateID[0],
    validateName[0],
    validateLastName[0],
    validateAge[0],
    validatePhone[0],
    validateAddress[0]
]