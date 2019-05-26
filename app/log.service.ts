import {Injectable} from "@angular/core";

@Injectable()

export class LogService {
  constructor(){}

  logService (msg: string){
    console.log("这里是LogService打印的日志服务:", msg)
  }

}