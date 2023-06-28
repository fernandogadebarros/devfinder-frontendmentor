interface DateTimeFormatOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
}

export function localeDate(
  data: string | null,
  options: DateTimeFormatOptions
): { shortDate: string } {
  const date = new Date(data || '');
  const shortDate = date.toLocaleDateString('en-GB', options);

  return { shortDate };
}

export function validateData(data: string | null, message: string) {
  const validationData = data === null || data === '';

  if (validationData) {
    return message;
  }

  return data;
}
