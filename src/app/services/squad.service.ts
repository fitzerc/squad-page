import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SquadInfo } from "../models/squad-info.model";

export abstract class BaseSquadService {
    abstract getSquadName(): Observable<SquadInfo>;
}

@Injectable()
export class MockSquadService extends BaseSquadService {
    constructor (private _http: HttpClient){
        super();
    }

    override getSquadName(): Observable<SquadInfo> {
        const url = 'https://localhost:7214/api/Squad';

        return this._http.get<SquadInfo>(url);
        //return of('Setsaholics Anonymous');
    }
}