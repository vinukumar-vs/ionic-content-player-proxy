import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
// import playerPath from '../../../node_modules/@project-sunbird/content-player/preview.html'
import * as testJson from '@project-sunbird/content-player/test.json';
import { SafePipe } from './safe.pipe';
import * as playerConfig from './player-config.json';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content-player',
  templateUrl: './content-player.component.html',
  styleUrls: ['./content-player.component.scss'],
  imports: [NgIf, SafePipe],
  standalone: true
})

export class ContentPlayerComponent  implements OnInit {
  @ViewChild('preview', { static: false }) previewElement!: ElementRef;

  constructor(private route: ActivatedRoute) { }
  // playerPath = playerPath;
  playerPath = './npm-content-player/preview.html'
  loading = true;
  sampleJSON = testJson;
  playerConfig = playerConfig;
  // routeParmas = inject(ActivatedRoute);
  previewType = "webview";

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let isMobileType = params.get('type');
      if(isMobileType)
        this.previewType = isMobileType;

      console.log("webview", params);
    })
    // const params = this.route.snapshot.paramMap;
    // console.log("params", params);
  }

  async ngAfterViewInit() {
    let contentPlayerEle = this.previewElement?.nativeElement;
    if (contentPlayerEle) {
      contentPlayerEle.src = this.playerPath+ `?${this.previewType}=true`;
      console.log("contentPlayerEle.src", contentPlayerEle.src);
      contentPlayerEle.onload = () => {
        setTimeout(() => {
          console.log(this.playerConfig);
          contentPlayerEle.contentWindow['initializePreview'](this.playerConfig);
          }, 2000);
        }
    }
  }

  onLoaded(event:any) {
    console.log("Content player load failed", event)
    // this.loading = false;
  }
}
