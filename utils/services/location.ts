const baseUrl = process.env.baseUrlApi

export async function getLocation() {
  const resp = await fetch(`${baseUrl}/location?fields[0]=url&populate[icon][fields][0]=alternativeText&populate[icon][fields][1]=url`)

  if (!resp.ok)
    throw new Error('Can not pull in location data')

  return resp.json();
}
