import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType: string = '';

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
    
  }

  ngOnInit(): void {
    this.route.url.subscribe(data => {
      
      this.authType = data[data.length - 1].path;
    })
  }

}
