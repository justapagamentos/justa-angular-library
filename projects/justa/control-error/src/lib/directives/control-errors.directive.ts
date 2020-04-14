import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ControlErrorComponent } from '../components';
import { FORM_ERRORS, FormErrorsDi } from './form-errors-di';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};

  private destroy$ = new Subject<void>();
  private statusChangeSubscription: Subscription;

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private controlDir: NgControl,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(FORM_ERRORS) private errors: FormErrorsDi,
    @Optional() @Host() private form: FormSubmitDirective,
  ) {
    this.container = vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    merge(
      this.submit$,
      this.control.valueChanges
    ).pipe(
      takeUntil(this.destroy$),
    ).subscribe(_ => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey];
        const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
        try {
          this.setError(text);
        } catch (error) {
          throw Error(`Error on set Error on Control ${this.controlDir.name}: ${error}`)
        }
      } else if (this.ref) {
        this.setError(null);
      }
    });

    this.statusChangeSubscription = this.watchStatusChange().subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(
        ControlErrorComponent,
      );
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
    this.renderer.addClass(this.el.nativeElement, 'input-error');
  }

  private watchStatusChange(): Observable<any> {
    return this.controlDir.statusChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(status => {
          if (status === 'VALID' && this.ref) {
            this.ref.instance._hide = true;
            this.renderer.removeClass(this.el.nativeElement, 'input-error');
          }
        })
      )
  }
}
