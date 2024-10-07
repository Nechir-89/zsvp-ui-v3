const baseUrl = process.env.baseUrlApi
const urlSegment = '/home-page'

export async function getHomePage() {
  const res = await fetch(`${baseUrl}${urlSegment}?populate=*`)

  if (!res.ok) throw new Error("Cant fetch home page data!")

  return res.json();
}
