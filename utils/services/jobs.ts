"use server";
import { appendFileSync } from "fs";
const baseUrl = process.env.baseUrlApi;

export async function openJobs() {
  const currentDate = new Date().toISOString().split("T")[0];
  const url = `${baseUrl}/jobs?fields[0]=title&fields[1]=location&fields[2]=type&fields[3]=openDate&fields[4]=closeDate&fields[5]=positions&fields[6]=textLang&fields[7]=body&fields[8]=howToApply&filters[closeDate][$gte]=${currentDate}`;
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
    const jsonData = (await resp.json()) as Jobs;
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

export async function getJob(id: string) {
  const url = `${baseUrl}/jobs/${id}?fields[0]=title&fields[1]=location&fields[2]=type&fields[3]=openDate&fields[4]=closeDate&fields[5]=positions&fields[6]=textLang&fields[7]=body&fields[8]=howToApply&populate=*`;
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
    const jsonData = (await resp.json()) as Job;
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
