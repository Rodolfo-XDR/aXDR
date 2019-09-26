import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  providers: [HttpClient]
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
