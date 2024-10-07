const baseUrl = process.env.baseUrlApi

export async function getPartners() {
  const resp = await fetch(`${baseUrl}/partners?fields[0]=logo&populate[logo][fields][0]=alternativeText&populate[logo][fields][1]=url`)

  if (!resp.ok) throw new Error('Can\'t load partners')

  return resp.json()
}
