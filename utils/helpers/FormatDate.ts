

export function FormatNewsPublishedDate(date: string) {
  const publishedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formatedDate = publishedDate.toLocaleDateString(undefined, options)
  // console.log(formatedDate)
  return formatedDate
}

export function getYear(){
  const year = new Date().getFullYear();
  return year;
}