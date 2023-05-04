import jwt from 'jsonwebtoken'

export const sendTokenResponse = async ({ res, data, message }) => {
  const accessToken = generateToken(data)

  res.status(200).json({
    data: { user: data, access_token: accessToken },
    message,
  })
}

export const generateToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: `${process.env.JWT_EXPIRE}`,
  })
}

export const decodeJwtToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
