# Superheroes SPA

A Product made By <strong>pablofonseca-dev</strong>

Made with Love ❤️

## Dear Developers

This application has the objective of being a boilerplate for creating CRUD applications using the Angular Framework.

Is based in Marvel and DC Superheroes, where we have the main CRUD operations and views.

With this project you could have an idea of the architecture, processes and operations that are necessary to handle a basic and functional SPA.

I decided to not modify the Angular CLI generated documentation, the plan from now and in the future is to use the same documentation to setup the environment.

If you want to collaborate that is going to be very welcome! 💻

Thank you so much, and happy coding!

## How can I see the SPA deployed? Is it necessary to setup my local environment?

As you can see this repository have many pipelines and GitHub Actions, part of the deployment steps (at least in Dev) is to deploy the App to Github Pages, so you can access the application without doing the setup! Just click in the link that is below. 

[Superheroes CRUD SPA](https://pablofonseca-dev.github.io/SuperHeroes_SPA/heroes/list) 🚀

# Local Setup

## JSON Server Setup

To run the JSON Server locally follow these steps: 

1. Install JSON Server as a global dependency if you don't have it installed: [JSON Server Repository](https://github.com/typicode/json-server#getting-started)
2. Go to the project directory **SuperHeroes_SPA** with the command line or command prompt. 
3. Type the following command <code>json-server --watch ./db.json --port=3004</code>

Now you should see the following log message from JSON Server. 

![json-server-log](https://user-images.githubusercontent.com/22894594/159025539-c0bf6689-3fc9-4c73-ac60-33dc3e2b087a.png)


<strong>Important Note</strong>

If you want to modify the port JSON Server is listening you could use the same flag <code>--port=<port_number></code>. Also is important to make the update in the <code>src/environments/environment.ts</code> typescript file and change the port number in there. 

## Credentials and Authentication

This project is not going to include any authentication credentials or sensitive information. Is not neccesary to have them, you could setup the same database and testing environments with the database code included.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### General Angular CLI Versions

- @angular-devkit/architect 0.1301.4
- @angular-devkit/build-angular 13.1.4
- @angular-devkit/core 13.1.4
- @angular-devkit/schematics 13.1.4
- @angular/cdk 13.2.3
- @angular/cli 13.1.4
- @angular/flex-layout 13.0.0-beta.38
- @angular/material 13.2.3
- @schematics/angular 13.1.4
- rxjs 7.4.0
- typescript 4.5.5
