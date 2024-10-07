const baseUrl = process.env.baseUrlApi
const segmentUrl = 'abouts?sort=id:asc'

export async function getAboutItems() {
  const req = await fetch(`${baseUrl}/${segmentUrl}`)

  if (!req.ok) throw new Error(`Can't fetch about items!`)

  return req.json()
}
