import { Joi } from 'celebrate'
import { validations } from '../utils/constants'

export const buyerSignUpSchema = Joi.object({
  first_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(validations.passwordPattern)
    .required()
    .error((errors) =>
      errors.map((err) => {
        if (err.code === 'string.pattern.base')
          err.message = `Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long`
        return err
      }),
    ),
})
