import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";
import { ConfigService } from "../../store/config.service";



export class ApiInterceptor implements HttpInterceptor {

    constructor(private configService: ConfigService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       /* let authToken = ""
        this.configService.getJwt().subscribe((e) => {
            authToken = e;
        })
        const host = isDevMode() ? testConfiguration.userIp : location.host; //testConfiguration.userIpProd;//location.host;
        let url = this.configService.getServerAddress(host) + req.url;
        const customContext = this.configService.customContext;
        url = (customContext && customContext === '1') 
        ? url.replace('<contextPath>', 'ADTCustom') 
        : url.replace('<contextPath>', 'ADT');
        // url = url.replace('<contextPath>', 'ADT');
        log(url);
        let httpRequest = null ;
        if (authToken != null) {
            const headers = req.headers.append('X-Authorization', authToken);
            httpRequest = req.clone({ url: url, headers });
        } else
            httpRequest = req.clone({ url: url });
        req = Object.assign(req, httpRequest);*/
        return next.handle(req);
    }

}