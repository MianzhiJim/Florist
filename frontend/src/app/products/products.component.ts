import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.products = [...data];
      console.log(this.products)
    })
  }

  getImgList(imgList: string) {
    const list = imgList.split(";");
    // console.log(list)
    return list[0];
  }
}
