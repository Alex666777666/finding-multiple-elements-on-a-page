export const getItemsList = title => {
  const elementsList = document.querySelectorAll('.technology')
  console.dir(elementsList)
  return elementsList
}

getItemsList()

export const getItemsArray = text => {
  const elementsArray = document.querySelectorAll('.tool')
  console.dir(Array.from(elementsArray))
  return elementsArray
}

getItemsArray()
