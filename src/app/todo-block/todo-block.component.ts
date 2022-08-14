import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.scss']
})
export class TodoBlockComponent implements OnInit {
  data = "Stuff and Junk";
  length = new Array(10);

  ngOnInit(): void {
    // Get from whatever thing it is that I need localstorage or a separate API
  }

}
