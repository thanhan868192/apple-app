import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[displayOnView]',
    standalone: true,
})
export class DisplayOnViewDirective implements OnInit, OnDestroy {
    @Input() displayClass = 'is-visible';
    private io?: IntersectionObserver;

    constructor(private el: ElementRef, private render: Renderer2) { }

    ngOnInit(): void {
        if (typeof window === 'undefined') return;

        this.io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        this.render.addClass(this.el.nativeElement, this.displayClass);
                        this.io?.unobserve(this.el.nativeElement);
                    }
                }
            },
            {
                root: null,
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px',
            }
        );

        this.io.observe(this.el.nativeElement);
    }

    ngOnDestroy(): void {
        this.io?.disconnect();
    }

}