// const baseUrl = process.env.baseUrlApi

// export async function openAlerts() {
//   const resp = await fetch(`${baseUrl}/website-alerts?filters[active][$eq]=true`)
//   if (resp.ok)
//     return resp.json();
//   else if (resp.status == 404) {
//     throw new Error('Alerts can not be browsed!')
//   } else {
//     throw new Error('Can not pull in alerts: ' + resp.statusText)
//   }
// }
