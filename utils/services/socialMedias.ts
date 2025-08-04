
'use server'
import { appendFileSync } from 'fs';
const baseUrl = process.env.baseUrlApi;

export async function getSocialMedias() {
  try {
    const url = `${baseUrl}/social-medias?populate=*`;
    const method = 'GET';
    const resp = await fetch(url);
    if (!resp.ok) {
      const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Status: ${resp.status} | StatusText: ${resp.statusText}\n`;
      try {
        appendFileSync('log.txt', logMsg);
      } catch (fsErr) {
        // Optionally handle file write error
      }
      return { data: null, meta: null, error: `Status: ${resp.status}` };
    }
    const jsonData = (await resp.json()) as SocialMedias;
    return { data: jsonData.data, meta: jsonData.meta, error: null };
  } catch (error: any) {
    const url = `${baseUrl}/social-as?populate=*`;
    const method = 'GET';
    const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Error: ${error?.message || "Unknown error"}\n`;
    try {
      appendFileSync('log.txt', logMsg);
    } catch (fsErr) {
      // Optionally handle file write error
    }
    return { data: null, meta: null, error: error?.message || "Unknown error" };
  }
}
