import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'jst-control-error',
  template: `
    <p class="error-msg" [class.hide]="_hide">
      {{_text}}
    </p>
  `,
  styles: [
    `
      .hide {
        display: none;
      }
      .error-msg {
        width: 100%;
        margin-top: .25rem;
        font-size: 80%;
        color: var(--danger-color, red);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit {
  _text;
  _hide = true;

  @Input() set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {}
}
