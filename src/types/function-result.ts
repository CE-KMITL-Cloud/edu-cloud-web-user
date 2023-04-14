type SuccessResponse<T> = {
  success: true
  data: T
}

type StatusResponse = {
  success: true
}

type ErrorResponse = {
  success: false
  message?: string
}

export type FunctionResult<T = undefined> = T extends undefined
  ? StatusResponse | ErrorResponse
  : SuccessResponse<T> | ErrorResponse
