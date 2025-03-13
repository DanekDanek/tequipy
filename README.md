# EmployeeOffboarding

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server (FE)

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Backend

The mock backend was made using `angular-in-memory-web-api`. As such, when you run `ng serve` the backend starts automatically. It has its limitations, but it was created for creating quick POCs and I think it fits the bill perfectly.

## Assumptions

The application was designed by me to make it easy to add new functionalities. For this reason, the dashboard uses a tabs component, and each of them is potentially a link (like the employees shown in the example). The application is divided into features (via folders), but it is based on standalone components. Parts that are used in different features are in the shared folder.

## App state

The application state is kept in a service that uses `BehaviorSubject`. For this size of the application, this is more than sufficient. For a more complex structure, it might be necessary to use the redux approach.
