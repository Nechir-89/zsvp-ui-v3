const baseUrl = process.env.baseUrlApi

export async function getContacts() {
  const resp = await fetch(`${baseUrl}/contacts?fields[0]=type&fields[1]=value&populate[icon][fields][0]=alternativeText&populate[icon][fields][1]=url`, { cache: 'no-cache' })

  if (!resp.ok)
    throw new Error('Can not pull in contacts data')

  return resp.json();
}
