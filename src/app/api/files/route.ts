import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const formData = await request.formData();

  const dataToObject: { [name: string]: FormDataEntryValue } = {};

  for (const [name, value] of formData.entries()) {
    dataToObject[name] = value;
  }

  const breakpointRegex = /[\r\n]+/;
  const dataValues: string[] = typeof dataToObject.file === 'string' ? dataToObject.file.split(breakpointRegex) : [];
  const headerColumns = dataValues.shift()?.split(',');

  console.log(headerColumns);
  console.log(dataValues);
  return NextResponse.json({ formData })
}