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

## Configs

- In app.module.ts import

```json
import { environment } from '@environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import[
!environment.production ? StoreDevtoolsModule.instrument() : [],
]
```

### auth

- `mkdir store-app/auth`
- `mkdir store-app/<feature>/<feature>.actions.ts` *implement*
- `mkdir store-app/<feature>/<feature>.effects.ts` *implement after service*
- `mkdir store-app/<feature>/<feature>.reducers.ts` *implement*
- `mkdir store-app/<feature>/<feature>.selectors.ts` *implement*
- `mkdir store-app/<feature>/<feature>.facade.ts` *implement*
- Add this path to tsconfig.js
  - `"@storeApp/*":["src/app/store-app/*"]`
  
## Services

- `mkdir core/model`
- `touch core/model/auth.model.ts` *implenent*
- Create index to export model `touch core/model/index.ts`
  - ```export * from './auth.model'```
- Add this path to tsconfig.js
  - `"@model":["src/app/core/model"],`
- `ng g s core/service/auth` *implement*
- Create indes to export services `touch core/service/index.ts`
  - `export * from './auth.service'`
- Add this path to tsconfig.js
  - `"@services":["src/app/core/service"]`

## Config NGRX

- Add StoreModule to StoreApp.module.ts

```json
  EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(
       authReduce.authFeaturekey,
       authReduce.reducerAuth
    )
```

- Add this to de app.module.ts

```json
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
imports:[
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
]
```

## Guard

- `ng g guard core/guards/main` canActivate *implement*
- Add CanActivate to app-routing.module.ts
  - `canActivate:[MainGuard]`
- `ng g guard core/guards/auth` canActivate *implement*
- Add CanActivate to app-routing.module.ts
  - `canActivate:[AuthGuard]`
