export const makeResponse = ({ res, status = 200, data, success, error, message }) => {
  const responseData = { data, success, error, message }

  //if data is undefined remove data property from responseData object
  if (!data) delete responseData.data
  res.status(status).json(responseData)
}
