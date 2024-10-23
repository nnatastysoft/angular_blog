import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrl: './all-post.component.css'
})
export class AllPostComponent implements OnInit {

  postArray!: Array<any>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
      this.postsService.loadData().subscribe(val => {
        this.postArray = val;
      })
  }

  onDelete(postImgPath: any, id: any) {
    this.postsService.deleteImage(postImgPath, id);
  }
}
