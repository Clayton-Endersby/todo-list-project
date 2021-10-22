import levelHeading from './../components/ui/levelHeading'
import link from './../components/ui/link'

const homePage = function () {
    const app = document.querySelector('#app')

    const main = document.createElement('main')
    const h1 = levelHeading('h1', 'The Great Canadian ToDo List')
    const h2 = levelHeading('h2', "No friggin around!")
    const toDos = link("To Do's", '/toDos')
    main.append(h1, h2, toDos)

    return main
}

export default homePage