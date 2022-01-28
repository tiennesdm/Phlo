// this setup is neccesary when we want use private/autheticated and public routes
// Example login, forgot pass signup will be public route and rest will be private routes
// we will use isPrivate true/false to decide to show the route or not

// for component path please give path name relative to Page directory.

const routes = [
    {
        componentName: 'LoginComponent',
        componentPath: 'Login',
        routepath:'/auth/login',
         isPrivate: false
    },
    {
        componentName: 'SignupComponent',
        componentPath: 'Signup',
        routepath:'/auth/signup',
         isPrivate: false
    },
    {
        componentName: 'UserComponent',
        componentPath: 'UserDetail',
         routepath:'/',
         isPrivate: true
    }
    // {
    //     componentName: 'DevicesDetail',
    //     componentPath: 'Devices/DevicesDetail',
    //     routepath:'/list/:name'
    // }
];

export default routes;
