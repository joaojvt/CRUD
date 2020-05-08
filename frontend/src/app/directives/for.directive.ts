import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]

  constructor(private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnInit() {
    for (const number in this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit: number })
    }
  }

}
