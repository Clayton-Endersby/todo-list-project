import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'

const homePage = function () {
    const app = document.querySelector('#app')

    const header = document.createElement('header')
    const h1 = levelHeading('h1', 'The Great Canadian ToDo List')
    const h2 = levelHeading('h2', "No friggin around!")
    const toDos = link("To Do's", '/toDos')
    header.append(h1)
    header.append(h2)
    header.append(toDos)

    return header
}

export default homePage