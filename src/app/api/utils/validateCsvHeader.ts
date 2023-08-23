export default function validateCsvHeader(headers: string[]) {
  const expectedHeaders = [ 'name', 'city', 'country', 'favorite_sport' ];
  console.log('expectedHeaders: ', expectedHeaders);
  
  if (headers.length !== expectedHeaders.length) return false;

  for (let index = 0; index < headers.length; index += 1) {
    if (headers[index] !== expectedHeaders[index]) {
      return false;
    }
  }

  return true;
}