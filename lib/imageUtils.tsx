function getImageNameFromPath(imageInPath: string) {
  return imageInPath
    .split('/')
    .pop()
    .replace(/(.jpe?g|.png|.webp)/, '')
}

function getImageTypeFromPath(image: string) {
  const imageExt = image.split('.').pop()
  return imageExt
}

export { getImageNameFromPath, getImageTypeFromPath }
