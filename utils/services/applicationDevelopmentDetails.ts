const baseUrl = process.env.baseUrlApi

export async function getDevelopmentDetails() {
  const resp = await fetch(`${baseUrl}/development-detail?fields[0]=name&fields[1]=link&fields[2]=color&populate[logo][fields][0]=alternativeText&populate[logo][fields][1]=url`)

  if (!resp.ok)
    throw new Error('Can not pull in development data')

  return resp.json();
}
