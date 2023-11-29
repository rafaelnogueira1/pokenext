import { getByLanguage } from './get-by-language';

export function filterUniqueValuesByProperty<
  T extends { language: { name: string } }
>(array: T[], language: string, property: keyof T): T[] {
  if (!array) {
    return [];
  }

  const data = getByLanguage(array, language);

  return data.filter((entry, index, self) => {
    return index === self.findIndex((t) => t[property] === entry[property]);
  });
}
