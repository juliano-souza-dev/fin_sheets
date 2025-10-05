import { env } from "@/env";
import { getGoogleSheetsClient } from "./google-sheet-api";

export async function loadEntriesFromSheet() {
  let sheets = await getGoogleSheetsClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "1Ydp7W6M6Cc7SGxrCBMBGMnh5ZK7pH3GlzRM0F-KU73U",
    range: "A:G",
  });

  const { values } = response.data;
  return response;
}
