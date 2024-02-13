export const SOURCE_DATABASE = assertString(process.env.SOURCE_DATABASE);
export const NOTION_API_KEY = assertString(process.env.NOTION_API_KEY);
export const BASE_URL = assertString(process.env.NEXT_PUBLIC_BASE_URL);
export const GOOGLE_ANALYTICS = assertString(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
export const GOOGLE_VERIFICATION_CODE = assertString(process.env.GOOGLE_VERIFICATION_CODE)

function assertString(data: unknown) {
  if (typeof data !== 'string') {
    throw new Error('ENV NOT SET');
  }
  return data;
}
