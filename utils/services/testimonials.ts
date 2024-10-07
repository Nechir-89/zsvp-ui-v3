const baseUrl = process.env.baseUrlApi
const urlSegment = 'testimonials?fields[0]=author&fields[1]=positionAndCompany&fields[2]=testimonial&fields[3]=lang&populate[image][fields][0]=alternativeText&populate[image][fields][1]=url&pagination[withCount]=false'
// const urlQuery = '?locale=ar'


export async function getTestimonials() {
  const res = await fetch(`${baseUrl}/${urlSegment}`)

  if (!res.ok) throw new Error(`Couldn't fetch testimonials!`);

  return res.json();
}
