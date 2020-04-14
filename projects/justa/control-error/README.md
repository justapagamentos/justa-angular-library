## Description

Built on top of the native angular direactives formControl and formControlName, by making a overwriting of those directives, only requirng you to import the `JstControlErrorsModule` capable of display feedback to users without any interaction with HTML on the client-side. Thus auto generating the necessary DOM elements


## Usage

### JstControlErrorsModule

Import the `JstControlErrorsModule` into your module to use the Control Errors directives.

```ts
import { JstControlErrorsModule } from '@justa/control-error'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JstControlErrorsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

| Directive name | Description | Props | Prop type |
| ------ | ------ | ----- | ---- |
| formControl/formControlName  | Override the native directives to show a error message | customErrors | Object |
