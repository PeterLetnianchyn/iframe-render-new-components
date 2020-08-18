import { InnerComponentComponent } from './inner-component/inner-component.component';
import { Component, ElementRef, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  inputValue = new FormControl('Hi there');
  doc;
  compRef: ComponentRef<InnerComponentComponent>;

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  onLoad(iframe) {
    this.doc = iframe.contentDocument || iframe.contentWindow;
    this.createComponent();
  }

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(InnerComponentComponent);
    this.compRef = this.vcRef.createComponent(compFactory);
    this.compRef.location.nativeElement.id = 'innerComp';

    ( this.compRef.instance as InnerComponentComponent).firstInput = this.inputValue;

    ( this.compRef.instance as InnerComponentComponent).emitOutput.subscribe(response => {
      this.inputValue.setValue(response.inputData);
    });

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
}
