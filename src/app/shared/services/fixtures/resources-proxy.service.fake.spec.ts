import { DATA_RESOURCES_FAKE } from '../../models/fixtures/resource.fake.spec';
import { Observable } from 'rxjs';
import { Response, ResponseOptions } from '@angular/http';
import 'rxjs/add/observable/of';

export class ResourcesProxyServiceFake {

    getResources(page: number): Observable<any> {
        const responseOptions: ResponseOptions = new ResponseOptions({
            body: DATA_RESOURCES_FAKE.resources
        });
        const response: Response = new Response(responseOptions);
        return Observable.of(response.json());
    }

    getResourceById(id: number): Observable<any> {
        const responseOptions: ResponseOptions = new ResponseOptions({
            body: DATA_RESOURCES_FAKE.resources
        });
        const response: Response = new Response(responseOptions);
        return Observable.of(response.json());
    }

    deleteResourceById(id: number): Observable<any> {
        const responseOptions: ResponseOptions = new ResponseOptions({
            body: DATA_RESOURCES_FAKE.resources
        });
        const response: Response = new Response(responseOptions);
        return Observable.of(response.json());
    }

    createResource(name: string, color: string, year: number, pantone_value: string): Observable<any> {
        const responseOptions: ResponseOptions = new ResponseOptions({
            body: DATA_RESOURCES_FAKE.resources
        });
        const response: Response = new Response(responseOptions);
        return Observable.of(response.json());
    }

    updateResource(id: number, name: string, color: string, year: number, pantone_value: string): Observable<any> {
        const responseOptions: ResponseOptions = new ResponseOptions({
            body: DATA_RESOURCES_FAKE.resources
        });
        const response: Response = new Response(responseOptions);
        return Observable.of(response.json());
    }

}
