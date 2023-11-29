export function getByLanguage<T extends { language: { name: string } }>(
  array: T[],
  language = 'en'
) {
  if (!array) {
    return [];
  }

  const result = array.filter((entry) => entry.language.name === language);

  if (result) {
    return result;
  }

  return array;
}
