# Intrucciones

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

## Configs

- In tsconfig.js before libs add
  
```json
"paths": {
      "@environment": ["src/environments/environment"],
}
```

## NGRX

- `npm install @ngrx/store`
- `npm install @ngrx/effects`
- `npm install @ngrx/store-devtools`
- `ng g m store-app`

### auth

- `mkdir store-app/auth`
- `mkdir store-app/<feature>/<feature>.actions.ts` *implement*
- `mkdir store-app/<feature>/<feature>.effects.ts` *implement after service*
- `mkdir store-app/<feature>/<feature>.reducers.ts` *implement*
- `mkdir store-app/<feature>/<feature>.selectors.ts` *implement*
- `mkdir store-app/<feature>/<feature>.facade.ts` *implement*



## Services
