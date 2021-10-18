import homePage from "./pages/homePage";
// import  from "../pages/toDoPage";

const routes = {
    '/':homePage(),
    '/toDos':toDoPage(),
}

const Router = function (pathname) {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
        )
        
        app.appendChild(routes[window.location.pathname])
}

export {routes}
export default Router