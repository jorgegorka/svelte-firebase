const firebaseResults = () => {
  const map = docs => {
    let newResults = []
    docs.forEach(doc => {
      let newResult = doc.data()
      newResult.id = doc.id
      newResults.push(newResult)
    })
    return newResults
  }

  return Object.freeze({
    map
  })
}

const FirebaseResults = firebaseResults()

export default FirebaseResults
