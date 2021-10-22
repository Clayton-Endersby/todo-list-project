import levelHeading from './../components/ui/levelHeading'
import toDoItem from './../components/ui/toDoItem'
import button from '../components/ui/button'

const toDoPage = function () {
    // const app = document.querySelector('#app')

    const main = document.createElement('main')
    // const main = document.createElement('main')
    // const footer = document.createElement('footer')

    const h1 = levelHeading('h1', '<a href="homePage.js">The Great Canadian ToDo List</a>')
    const h2 = levelHeading('h2', "Pitter Patter, let's git at 'er")
    const toDo = toDoItem()
    const addItem = button('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-plus-circle fa-w-16 fa-9x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" class=""></path></svg>', 'add-todo')

    main.append(h1)
    main.append(h2)
    main.append(toDo)
    main.append(addItem)

    return main
}

export default toDoPage