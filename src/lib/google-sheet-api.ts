import { google } from "googleapis";
import { env } from "@/env";
let sheetsClient: any;

const credentials = {
  client_email: env.client_email,
  private_key: env.private_key,
  project_id: env.project_id,
};

export async function getGoogleSheetsClient() {
  if (sheetsClient) {
    return sheetsClient;
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}
