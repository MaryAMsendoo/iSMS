document.addEventListener("DOMContentLoaded", () => {
    const router = new Router(document.getElementById('app'));
    router.setTemplatePath('/templates/');

    router.addRoute('/', async function () {
        return this.template('dashboard.htm');
    });


    document.addEventListener("click", (event) => {
        const { target } = event;
        if (target.tagName === "A" && target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            router.handleNavigation(new URL(target.href).pathname);
        }
    });
});