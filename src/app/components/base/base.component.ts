import { Component, OnInit, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/shared/session.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
  providers: [HttpClient]
})
export class BaseComponent implements OnInit {

  private sessionService : SessionService;

  constructor(private injector : Injector) {
    this.sessionService = this.injector.get(SessionService);
  }

  ngOnInit() {
  }

  showClient() {
    this.sessionService.showClient();
  }

  hideClient() {
    this.sessionService.hideClient();
  }
  
  get clientShow() : BehaviorSubject<boolean> {
    return this.sessionService.ClientShow;
  }

}
