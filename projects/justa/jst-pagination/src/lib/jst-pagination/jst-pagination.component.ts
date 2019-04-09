import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'jst-pagination',
  templateUrl: 'jst-pagination.component.html',
  styles: [
    `
      jst-pagination {
        width: 100%;
        font-size: 12px;
      }
      button {
        cursor: pointer;
        display: inline;
        width: fit-content;
        padding: 0;
        background-color: transparent;
        border: none;
        margin: 0;
      }
      button.page-item {
        margin: 0 8px;
      }
      button.selected {
        color: #076e95;
      }
      span {
        cursor: pointer;
      }
      .disable {
        pointer-events: none;
      }
      .disable-arrow {
        pointer-events: none;
        opacity: 0.5;
      }
    `,
  ],
})
export class JstPaginationComponent implements OnInit, OnChanges {
  @Input() public numberOfPages: number = 1;
  @Input() public maxPagesShowed = 5;
  @Input() public innerElements = 3;
  @Input() public customClass: string = '';

  @Output() public pageChanged = new EventEmitter();

  public pagesInScreen: any[];
  public selectedPage = 1;
  public allPages: number[];

  constructor() {}

  ngOnInit(): void {
    const removeClassPage: Element[] = Array.from(document.getElementsByClassName('button .page'));
    removeClassPage.forEach(elem => {
      elem.classList.remove('page');
    });

    this.reinitializePages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {
      numberOfPages: { currentValue },
    } = changes;
    this.numberOfPages = currentValue;
    this.reinitializePages();
  }

  /**
   * @description Navigate from one to one page through keyboard
   * @param event key event
   */
  @HostListener('keydown', ['$event'])
  formPaginate(event): void {
    const { code, key } = event;
    if (key === 'ArrowRight' && code === 'ArrowRight') {
      this.advance(true);
    } else if (key === 'ArrowLeft' && code === 'ArrowLeft') {
      this.advance(false);
    }
  }

  /**
   * reinitializePages
   * @description Reinicia o número de páginas mostradas na tela
   */
  reinitializePages(): void {
    this.allPages = Array.from({ length: this.numberOfPages }, (_, i) => {
      i++;
      return i;
    });
    this.setPages();
  }

  /**
   * @description Go to a clicked page
   * @param selectedPage selected page
   */
  goToPage(selectedPage: number): void {
    if (!isNaN(selectedPage)) {
      this.pageChanged.emit({
        lastPage: this.selectedPage,
        actualPage: selectedPage,
      });
      this.selectedPage = selectedPage;
      this.setPages();
    }
  }

  /**
   * @description Set pages to navigate on screen
   */
  setPages(): void {
    // example: [1, 2, 3, 4, 5]
    if (this.allPages.length < this.maxPagesShowed) {
      this.pagesInScreen = this.allPages;
    } else {
      // example: [1, '...', 4, 5, 6, '...', 9]
      if (
        this.selectedPage >= this.maxPagesShowed &&
        this.selectedPage <= this.allPages.length - this.maxPagesShowed + 1
      ) {
        const start: number = Math.ceil(this.innerElements / 2);
        const end: number = Math.floor(this.innerElements / 2);
        this.pagesInScreen = [1];
        this.pagesInScreen.push('...');
        this.pagesInScreen = this.pagesInScreen.concat(
          this.allPages.slice(this.selectedPage - start, this.selectedPage + end),
        );
        this.pagesInScreen.push('...', this.allPages[this.allPages.length - 1]);
      }
      // example: [1, 2, 3, 4, '...', 9]
      else if (this.selectedPage < this.maxPagesShowed) {
        this.pagesInScreen = this.allPages.slice(0, this.maxPagesShowed);
        this.pagesInScreen.push('...', this.allPages[this.allPages.length - 1]);
      }
      // example: [1, '...', 6, 7, 8, 9]
      else {
        this.pagesInScreen = [];
        this.pagesInScreen.push(1, '...');
        this.pagesInScreen = this.pagesInScreen.concat(
          this.allPages.slice(this.allPages.length - this.maxPagesShowed, this.allPages.length),
        );
      }
    }
  }

  /**
   * @description Advance or returns 1 from 1 page
   * @param advance true - advance, false - return
   */
  advance(advance: boolean, event?): void {
    let actualPage: number;
    if (advance) {
      actualPage =
        this.selectedPage < this.allPages.length ? this.selectedPage + 1 : this.allPages.length;
    } else {
      actualPage = this.selectedPage > 1 ? this.selectedPage - 1 : 1;
    }
    this.pageChanged.emit({ lastPage: this.selectedPage, actualPage });
    this.selectedPage = actualPage;
    this.setPages();
  }

  /**
   * @description verify if page is not a number
   * @param page page to verify
   */
  notNumber(page: any): boolean {
    return isNaN(page);
  }
}
