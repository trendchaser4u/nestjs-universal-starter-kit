import {
  Directive,
  OnInit,
  ViewContainerRef,
  TemplateRef,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appShellRender]'
})
export class AppShellRenderDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) {
    console.log(platformId);
    console.log(isPlatformServer(platformId));
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

@Directive({
  selector: '[appShellNoRender]'
})
export class AppShellNoRenderDirective implements OnInit {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId
  ) {
    console.log(platformId);
    console.log(isPlatformServer(platformId));
  }

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
