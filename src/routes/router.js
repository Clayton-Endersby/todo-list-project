import homePage from "../pages/homePage";
import signUpPage from "../pages/signUpPage";
import loginPage from "../pages/loginPage";

const routes = {
    '/':homePage(),
    '/login':loginPage(),
    '/signUp':signUpPage(),
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