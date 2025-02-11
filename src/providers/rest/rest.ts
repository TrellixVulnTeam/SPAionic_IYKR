import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { homeProvider } from '../../pages/home/home'
import { NativeStorage } from '@ionic-native/native-storage';
import { empty } from 'rxjs/Observer';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  data_prov: any;
  item: any;
  id: any;
  result:any;
  deed_number: any;
  province_id: any;
  amphur_code: any;
  apiUrl = 'http://services-spa.azurewebsites.net/api/values';
  UrlProvince = 'https://smartball.000webhostapp.com/uploads/get_province.php'
  UrlAmphur = 'http://services-spa.azurewebsites.net/api/province'
  UrlMarker = 'http://services-spa.azurewebsites.net/api/marker';
  UrlWell = 'http://services-spa.azurewebsites.net/api/well';
  UrlRoad = 'http://services-spa.azurewebsites.net/api/road';
  UrlShape = 'http://services-spa.azurewebsites.net/api/shape';
  UrlWidth = 'http://services-spa.azurewebsites.net/api/width';
  UrlTotal = 'http://services-spa.azurewebsites.net/api/search';
  UrlProduct = 'https://smartball.000webhostapp.com/uploads/get_product.php';
  UrlType = 'https://smartball.000webhostapp.com/uploads/get_type.php';
  constructor(public http: HttpClient,
              public nativeStorage: NativeStorage,
              //public homeProvider: homeProvider
              ) {
    
  }
  getData() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMarker(deed_number, province_id, amphur_code){
    return new Promise(resolve => {
      this.deed_number = deed_number;
      this.province_id = province_id;
      this.amphur_code = amphur_code;
      
      this.http.get(this.UrlMarker+'/'+this.deed_number+','+this.province_id+','+this.amphur_code).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getProvince(){
    
    return new Promise(resolve => {
      this.http.get(this.UrlProvince).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getAmphur(log_hr){
      return new Promise(resolve => {
        this.id = log_hr; 

        this.http.get(this.UrlAmphur+'/'+this.id).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
  }
  
  getWell(province_id, amphur_code){

    return new Promise(resolve => {
      this.province_id = province_id;
      this.amphur_code = amphur_code;
      this.http.get(this.UrlWell+'/'+this.province_id+','+this.amphur_code).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getRoad(province_id, amphur_code){
    
        return new Promise(resolve => {
          this.province_id = province_id;
          this.amphur_code = amphur_code;
          this.http.get(this.UrlRoad+'/'+this.province_id+','+this.amphur_code).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }
  getShape(province_id, amphur_code){

    return new Promise(resolve => {
      this.province_id = province_id;
      this.amphur_code = amphur_code;
      this.http.get(this.UrlShape+'/'+this.province_id+','+this.amphur_code).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getWidth(province_id, amphur_code){
    
        return new Promise(resolve => {
          this.province_id = province_id;
          this.amphur_code = amphur_code;
          this.http.get(this.UrlWidth+'/'+this.province_id+','+this.amphur_code).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }    
  getTotal(lat, lon, province_id, amphur_code, well, road, shape, width, type_size, id, appraisal, size){
   
    var url = this.UrlTotal+'/'+ lat+','+lon+','+province_id+','+amphur_code+','+well+','+road+','+shape+','+width+','+type_size+','+id+','+appraisal+','+size;
    console.log(url);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getProduct(){
    
    return new Promise(resolve => {
      this.http.get(this.UrlProduct).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }  
  getType() {

    return new Promise(resolve => {
      this.http.get(this.UrlType).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }  
}
