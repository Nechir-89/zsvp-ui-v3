"use server";
import { appendFileSync } from "fs";
const baseUrl = process.env.baseUrlApi;

export async function openTenders() {
  const currentDate = new Date().toISOString().split("T")[0];
  const url = `${baseUrl}/tenders?fields[0]=title&fields[1]=openDate&fields[2]=closeDate&fields[3]=textLang&filters[closeDate][$gte]=${currentDate}`;
  const method = "GET";
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Status: ${
        resp.status
      } | StatusText: ${resp.statusText}\n`;
      try {
        appendFileSync("log.txt", logMsg);
      } catch (fsErr) {
        // Optionally handle file write error
      }
      return { data: null, meta: null, error: `Status: ${resp.status}` };
    }
    const jsonData = (await resp.json()) as Tenders;
    return { data: jsonData.data, meta: jsonData.meta, error: null };
  } catch (error: any) {
    const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Error: ${
      error?.message || "Unknown error"
    }\n`;
    try {
      appendFileSync("log.txt", logMsg);
    } catch (fsErr) {
      // Optionally handle file write error
    }
    return { data: null, meta: null, error: error?.message || "Unknown error" };
  }
}

export async function getTender(id: string) {
  const url = `${baseUrl}/tenders/${id}?fields[0]=title&fields[1]=openDate&fields[2]=closeDate&fields[3]=textLang&fields[4]=body&fields[5]=howToApply&populate=*`;
  const method = "GET";
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Status: ${
        resp.status
      } | StatusText: ${resp.statusText}\n`;
      try {
        appendFileSync("log.txt", logMsg);
      } catch (fsErr) {
        // Optionally handle file write error
      }
      return { data: null, meta: null, error: `Status: ${resp.status}` };
    }
    const jsonData = (await resp.json()) as Tender;
    return { data: jsonData.data, meta: jsonData.meta, error: null };
  } catch (error: any) {
    const logMsg = `${new Date().toISOString()} | URL: ${url} | Method: ${method} | Error: ${
      error?.message || "Unknown error"
    }\n`;
    try {
      appendFileSync("log.txt", logMsg);
    } catch (fsErr) {
      // Optionally handle file write error
    }
    return { data: null, meta: null, error: error?.message || "Unknown error" };
  }
}
