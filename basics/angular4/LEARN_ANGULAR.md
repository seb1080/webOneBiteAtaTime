
# Learning ANGULAR

Reference [styleguide](https://angular.io/guide/styleguide)


This is a simple view of the ANGULAR project structure. 

Project of reference : [Angular Example](https://github.com/gothinkster/angular-realworld-example-app/tree/master/src)

                            
src   -----------   app        ------   auth  -------------------- auth.module.ts   
README.md         assets                home                       auth.module.html
package.json      environments          app.component.ts          auth.module.ts 
main.ts                                 app.component.html        auth.component.ts
index.html                              app-routing.module.ts     auth-routing.module.ts
test.ts                                 app.module.ts

## Component Structure

Component most be in a folder name such : `name.component.ts|.html|.css`

```html
// Example of templating with @angular/material
<div ng-controller="DemoCtrl" layout="column" 
  ng-cloak="" 
  class="md-inline-form inputdemoBasicUsage" 
  ng-app="MyApp">
  <md-content 
    md-theme="docs-dark" 
    layout-gt-sm="row"
    layout-padding="">
    <div>
      <md-input-container>
        <label>Title</label>
        <input ng-model="user.title">
      </md-input-container>
      <md-input-container>
        <label>Email</label>
        <input ng-model="user.email" type="email">
      </md-input-container>
    </div>
  </md-content>
</div>
```

```js
angular
  .module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com'
    };
    // can add data to bind
  })
  .config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });
```

## NgModules

`NgModules` are containers for a cohesive of code dedicated to and application domain. They can contain components, service and other files. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

 The `@NgModule()` decorator is a function that takes a single metadata object, whose properties describe the module.

* __declarations__: The components, directives, and pipes that belong to this NgModule.

* __exports__: The subset of declarations that should be visible and usable in the component templates of other NgModules.

* __imports__: Other modules whose exported classes are needed by component templates declared in this NgModule.

* __providers__: Creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. (You can also specify providers at the component level, which is often preferred.)

* __bootstrap__: The main application view, called the root component, which hosts all other app views. Only the root NgModule should set the bootstrap property.

```ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    ConfirmdialogComponent, 
    DialogConfirmPassword
    ],
  providers: [
    LoginService, MapService
  ],
  bootstrap: [AppComponent]
}
export class AppModule { }
```

## Components

Components are pieces of View.

```ts
/* 
  Component metadata: 
  Reference the location of the template and style
*/
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  // Properties
  map:any;
  sidebar:any;

  constructor(private service: HeroService) {}
  // lifecycle hook
  ngOnInit() {
    this.initMap();
    this.heroes = this.service.getHeroes();
  }
  // Methods
    initMap() {
    let parent: any = this;
    var layer = new L.StamenTileLayer("toner");
    this.map = new L.Map("map", {
      center: new L.LatLng(45.58017, -73.61479),
      zoom: 11,
      maxZoom: 18,
      minZoom: 11
    });

    this.map.addLayer(layer);

    this.sidebar = L.control.sidebar('sidebar', {
      position: 'right',
      closeButton: true,
      autoPan: false
    });
  }
}
```
[Documentation](https://angular.io/guide/architecture-components)

## Lifecycle Hooks

Angular creates, updates, and destroys components as the user moves through the application. 

[Documentation](https://angular.io/guide/lifecycle-hooks)

### ngOnChanges()

Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.

Called before ngOnInit() and whenever one or more data-bound input properties change.

### ngOnInit()

Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.

Called once, after the first ngOnChanges().

### ngDoCheck()	

Detect and act upon changes that Angular can't or won't detect on its own.

Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

### ngAfterContentInit()	

Respond after Angular projects external content into the component's view / the view that a directive is in.

Called once after the first ngDoCheck().

### ngAfterContentChecked()	

Respond after Angular checks the content projected into the directive/component.

Called after the ngAfterContentInit() and every subsequent ngDoCheck().

### ngAfterViewInit()	

Respond after Angular initializes the component's views and child views / the view that a directive is in.

Called once after the first ngAfterContentChecked().

### ngAfterViewChecked()	

Respond after Angular checks the component's views and child views / the view that a directive is in.

Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().

### ngOnDestroy()	

Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.

Called just before Angular destroys the directive/component.

## Services

Components are pieces of View.