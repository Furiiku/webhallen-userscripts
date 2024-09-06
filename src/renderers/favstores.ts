import { deleteFavoriteStores } from "../lib/api"

async function _clearAllStores(event: MouseEvent): Promise<void> {
    event.preventDefault()
    await deleteFavoriteStores()
    location.reload()
}

export const renderClearFavoriteStoresUtility = (): void => {
    const ul = document.querySelector('.list-group .mt-5')

    if (ul) {
        const li = document.createElement('li')
        li.className = 'list-group-item store-list-item'
        const label = document.createElement('label')
        label.className = 'stock-favorite'
        label.title = 'Rensa'
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        const span1 = document.createElement('span')
        const link = document.createElement('a')
        link.href = '#'
        link.className = 'store-info'
        const span2 = document.createElement('span')
        span2.textContent = 'Ta bort alla butiker'

        label.appendChild(checkbox)
        label.appendChild(span1)
        link.appendChild(span2)
        link.addEventListener('click', (event) => { _clearAllStores(event).catch(() => {}) })
        li.appendChild(label)
        li.appendChild(link)

        const children = ul.children
        ul.innerHTML = ""
        ul.appendChild(li)
        for (let child of children) {
            ul.appendChild(child)
        }
    }
}