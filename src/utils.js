export function getImageUrl(imageId, size = 's') {
  return (
    'https://thumbs.dreamstime.com/' +
    imageId +
    size +
    '.JPG'
  );
}
