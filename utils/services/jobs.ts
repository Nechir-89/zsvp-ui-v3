const baseUrl = process.env.baseUrlApi;

export async function openJobs() {
  const currentDate = new Date().toISOString().split('T')[0];
  const resp = await fetch(`${baseUrl}/jobs?fields[0]=title&fields[1]=location&fields[2]=type&fields[3]=openDate&fields[4]=closeDate&fields[5]=positions&fields[6]=textLang&fields[7]=body&fields[8]=howToApply&filters[closeDate][$gte]=${currentDate}`)
  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('Jobs page can not be browsed!')
  } else {
    throw new Error('Can not pull in jobs: ' + resp.statusText)
  }
}

export async function getJob(id: string) {
  const resp = await fetch(`${baseUrl}/jobs/${id}?fields[0]=title&fields[1]=location&fields[2]=type&fields[3]=openDate&fields[4]=closeDate&fields[5]=positions&fields[6]=textLang&fields[7]=body&fields[8]=howToApply&populate=*`);
  if (resp.ok)
    return resp.json();
  else if (resp.status == 404) {
    throw new Error('The job you are trying to brows does not exist!')
  } else {
    throw new Error('Can not pull in job: ' + resp.statusText)
  }
}
