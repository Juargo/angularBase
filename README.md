# Intrucciones

- Angular 12

Pasos:

- `ng new angular-project`
  - `Would you like to add Angular routing? Yes`
  - `Which stylesheet format would you like to use? SCSS [ https://sass-lang.com documentation/syntax#scss`
- `cd .\angular-project\`
- `ng g m core --module app.module`
- `ng g m features --route main --module app.module --routing`
- `ng g c features/layout/main-layout`
- Delete component features and change main path component for MainLayoutComponent in features-routin.module
- Delete feature component from feature module
- Replace all in app.component.html for
  - `<router-outlet></router-outlet>`
- Add this route to to app-routing.module file
  - `{ path: '', redirectTo: main, pathMatch: 'full' }`
- `ng g m features/auth --route auth --module app.module --routing`