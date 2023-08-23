import { NextResponse } from 'next/server';
import validateCsvHeader from '@/app/api/utils/validateCsvHeader';
 
export async function POST(request: Request) {
  const formData = await request.formData();

  const dataToObject: { [name: string]: FormDataEntryValue } = {};

  for (const [name, value] of formData.entries()) {
    dataToObject[name] = value;
  }

  const breakpointRegex = /[\r\n]+/;
  const dataValues: string[] = typeof dataToObject.file === 'string' ? dataToObject.file.split(breakpointRegex) : [];
  const headerColumns = dataValues.shift()?.split(',');

  if (!headerColumns) return NextResponse.json({ error: 'Bad Request: CSV file has no content!' }, { status: 400 })
  if (!validateCsvHeader(headerColumns)) return NextResponse.json({ error: 'Bad Request: CSV file header is incorrect!' }, { status: 400 })

  return NextResponse.json({ formData })
}