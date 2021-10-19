import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'

const toDoPage = function () {
    const app = document.querySelector('#app')

    const header = document.createElement('header')
    const h1 = levelHeading('h1', 'The Great Canadian ToDo List')
    const home = link("Home", '/')
    header.append(h1)
    header.append(home)

    return header
}

export default toDoPage