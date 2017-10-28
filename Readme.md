# Code Refactor

Angular 1.x code can be refactored as below
    -  what: HTTP calls can be delegated to service/factory
    - why: Controllers should just act as a glue between view and model and the http calls and other business logic can be reused in services.
    Hence seperating the concerns and making code more readable.
    - URL's constants can be moved to the constant file
    
Some of the functions are unclear i.e find() and edit() I could not understand the real purpose.

    
# Angular2 Code

  - Created a component Interview.component.ts
  - Created a service for HTTP Calls Http.service.ts
  - Created a constant file for the URL constants
  
