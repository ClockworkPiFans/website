export function getLocaleLink(originalLink: string, locale: string): string {
  return `/${locale}${originalLink}`;
}

export function getExternalLocaleLink(originalLink: string, locale: string) {
  if (locale === 'en') {
    return originalLink;
  } else {
    return originalLink + '/' + locale ;
  }
}