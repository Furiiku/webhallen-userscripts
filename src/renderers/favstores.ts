import { deleteFavoriteStores } from '../lib/api'

async function _clearAllStores (event: MouseEvent): Promise<void> {
  event.preventDefault()
  await deleteFavoriteStores()
  location.reload()
}

export const renderClearFavoriteStoresUtility = (): void => {
  const ul = document.querySelector('.list-group')

  if (ul) {
    const li = document.createElement('li')
    li.className = 'list-group-item store-list-item'
    const label = document.createElement('label')
    label.className = 'stock-favorite'
    label.title = 'Rensa'
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const span1 = document.createElement('span')
    span1.textContent = 'Rensa alla butiker'
    const link = document.createElement('a')
    link.href = '#'
    link.className = 'store-info'
    link.addEventListener('click', (event) => { _clearAllStores(event).catch(() => { }) })
    const span2 = document.createElement('span')
    span2.className = 'store-location'
    span2.textContent = 'Löser problem me butiker som inte går att ta bort då de försvunnit'
    const span4 = document.createElement('span')
    link.appendChild(span1)
    link.appendChild(span2)
    li.appendChild(label)
    li.appendChild(link)
    ul.prepend(li)
  } else {
    console.error('Kunde inte hitta UL!')
  }
}
