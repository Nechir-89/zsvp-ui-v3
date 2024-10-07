const baseUrl = process.env.baseUrlApi;

export async function openTenders() {
  const currentDate = new Date().toISOString().split('T')[0];
  const resp = await fetch(`${baseUrl}/tenders?fields[0]=title&fields[1]=openDate&fields[2]=closeDate&fields[3]=textLang&filters[closeDate][$gte]=${currentDate}`)
  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('Tenders page can not be browsed!')
  } else {
    throw new Error('Can not pull in tenders: ' + resp.statusText)
  }
}

export async function getTender(id: string) {
  const resp = await fetch(`${baseUrl}/tenders/${id}?fields[0]=title&fields[1]=openDate&fields[2]=closeDate&fields[3]=textLang&fields[4]=body&fields[5]=howToApply&populate=*`);
  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('The tender you are trying to brows does not exist!')
  } else {
    throw new Error('Can not pull in tender: ' + resp.statusText)
  }
}
