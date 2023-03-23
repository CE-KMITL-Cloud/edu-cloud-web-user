export const JWT_SECRET = 'devias-top-secret-key'
export const JWT_EXPIRES_IN = 3600 * 24 * 2 // * 2 days

export const sign = (payload: Record<string, any>, privateKey: string, header: Record<string, any>): string => {
  const now = new Date()
  header.expiresIn = new Date(now.getTime() + header.expiresIn)

  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64')
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')

  const signature = Buffer.from(
    Array.from(encodedPayload)
      .map((item, key) => String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0)))
      .join(''),
  ).toString('base64')

  return `${encodedHeader}.${encodedPayload}.${signature}`
}

export const decode = (token: string): any => {
  const [encodedHeader, encodedPayload, signature] = token.split('.')

  const header = JSON.parse(Buffer.from(JSON.stringify(encodedHeader), 'base64').toString('ascii'))
  const payload = JSON.parse(Buffer.from(JSON.stringify(encodedPayload), 'base64').toString('ascii'))

  const now = new Date()

  if (now < header.expiresIn) {
    throw new Error('Expired token')
  }

  const verifiedSignature = Buffer.from(
    Array.from(encodedPayload)
      .map((item, key) => String.fromCharCode(item.charCodeAt(0) ^ JWT_SECRET[key % JWT_SECRET.length].charCodeAt(0)))
      .join(''),
  ).toString('base64')

  if (verifiedSignature !== signature) {
    throw new Error('Invalid signature')
  }

  return payload
}

export const verify = (token: string, privateKey: string): Record<string, any> => {
  const [encodedHeader, encodedPayload, signature] = token.split('.')

  const header = JSON.parse(Buffer.from(JSON.stringify(encodedHeader), 'base64').toString('ascii'))
  const payload = JSON.parse(Buffer.from(JSON.stringify(encodedPayload), 'base64').toString('ascii'))

  const now = new Date()

  if (now < header.expiresIn) {
    throw new Error('Expired token')
  }

  const verifiedSignature = Buffer.from(
    Array.from(encodedPayload)
      .map((item, key) => String.fromCharCode(item.charCodeAt(0) ^ privateKey[key % privateKey.length].charCodeAt(0)))
      .join(''),
  ).toString('base64')

  if (verifiedSignature !== signature) {
    throw new Error('Invalid signature')
  }

  return payload
}
