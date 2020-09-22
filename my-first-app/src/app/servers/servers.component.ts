import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  servers = ['Test1', 'Test22'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  ngOnInit(): void {
  }

}
