import { removeDiacritics } from './diacritics'

const filterResults = (searchTerm, elements, fieldName) => {
  let lowerCaseTerm = removeDiacritics(searchTerm).toLowerCase()

  const search = () => {
    if (elements.length > 0 && searchTerm.length > 1) {
      return elements.filter(result => {
        const normalisedName = removeDiacritics(result[fieldName]).toLowerCase()
        return normalisedName.includes(lowerCaseTerm)
      })
    } else {
      return elements
    }
  }

  return {
    search
  }
}

export { filterResults }
