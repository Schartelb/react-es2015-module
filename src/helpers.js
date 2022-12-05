const Choice= (items)=>{
    const pick = Math.floor(Math.random*items.length)
    return(items[pick])
}

const Remove= (items,item)=>{
    items.splice(items.indexOf[item],1)
    return item
}

export {Choice,Remove}