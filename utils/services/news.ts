
const baseUrl = process.env.baseUrlApi

export async function getSomeNews(limit: number) {
  const resp = await fetch(`${baseUrl}/all-news?pagination[limit]=${limit}
                            &fields[0]=title&fields[1]=newsExcerpt&fields[2]=news&fields[3]=lang&fields[4]=publishedAt
                            &fields[5]=customPublishedDate
                            &populate[featuredImage][fields][0]=alternativeText&populate[featuredImage][fields][1]=url
                            &populate[photos][fields][0]=alternativeText&populate[photos][fields][1]=url
                            &sort=id:desc`)

  if (!resp.ok) {
    console.log(resp.status)
    throw new Error(`Cann't fetch news!`)
  }

  return resp.json()
}

// get all news
export async function getNews() {
  const resp = await fetch(`${baseUrl}/all-news?fields[0]=title&fields[1]=newsExcerpt&fields[2]=news&fields[3]=lang&fields[4]=publishedAt&fields[5]=customPublishedDate&populate[featuredImage][fields][0]=alternativeText&populate[featuredImage][fields][1]=url&populate[photos][fields][0]=alternativeText&populate[photos][fields][1]=url&sort=id:desc`)

  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('News page can not be browsed!')
  } else {
    throw new Error('Can not pull in news: ' + resp.statusText)
  }

}

// get one news
export async function getOneNews(newsId: string) {
  const resp = await fetch(`${baseUrl}/all-news/${newsId}?fields[0]=title&fields[1]=newsExcerpt&fields[2]=news&fields[3]=lang&fields[4]=publishedAt&fields[5]=customPublishedDate&populate[photos][fields][0]=alternativeText&populate[photos][fields][1]=url&populate[photos][fields][2]=width&populate[photos][fields][3]=height&populate[documents][populate][docs][fields]=url`)

  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('The news you are trying to brows does not exist!')
  } else {
    throw new Error('Can not pull in the news you are trying to brows: ' + resp.statusText)
  }
}