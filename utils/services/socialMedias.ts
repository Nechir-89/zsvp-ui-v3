const baseUrl = process.env.baseUrlApi

export async function getSocialMedias() {
  const resp = await fetch(`${baseUrl}/social-medias?populate=*`)

  if (!resp.ok) {
    console.log(resp.status)
    throw new Error(`Cann't fetch social medias!`)
  }

  return resp.json()
}
