
const baseUrl = process.env.baseUrlApi

type ContactUs = {
  firstName: string,
  lastName: string,
  email: string,
  message: string,
}

export async function post(data: ContactUs) {
  const resp = await fetch(`${baseUrl}/contact-uses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: data })
  })

  if (!resp.ok) {
    throw new Error('Can not send data')
  }

  return resp.json()
}
