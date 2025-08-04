// import { openAlerts } from '@/utils/services/alerts';
// import React from 'react'

// export default async function Alert() {
//   const alertPromise: Promise<Alerts> = openAlerts();
//   const alerts = await alertPromise
//   if (alerts?.data?.length !== 0)
//     return (
//       <section
//         dir={alerts?.data[0]?.attributes.lang === 'en' ? 'ltr' : 'rtl'}
//         className={`alert ${alerts?.data[0]?.attributes.type}-alert`}>
//         {
//           alerts?.data[0].attributes.text
//         }
//       </section>
//     )

//   return null
// }
