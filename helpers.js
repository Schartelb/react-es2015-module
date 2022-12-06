const getRandomFruit = (items) => {
    const pick = Math.floor(Math.random() * items.length)
    return items[pick]
}

const removeFruit = (items, item) => {
    items.splice(items.indexOf[item], 1)
    return item
}

export { getRandomFruit, removeFruit }