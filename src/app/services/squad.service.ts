import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SquadInfo } from "../models/squad-info.model";

export abstract class BaseSquadService {
    abstract getSquadName(squadNumber: number): Observable<SquadInfo>;
    abstract getSquadById(squadId: string): Observable<SquadInfo>;
}

@Injectable()
export class MockSquadService extends BaseSquadService {
    constructor (private _http: HttpClient){
        super();
    }

    override getSquadName(squadNumber: number): Observable<SquadInfo> {
        const url = 'https://localhost:7214/api/Squad/bySquadNumber/' + squadNumber;
        return this._http.get<SquadInfo>(url);
    }

    override getSquadById(squadId: string): Observable<SquadInfo> {
        //const url = 'https://localhost:7214/api/Squad/' + squadId;
        const url = this.baseUrl + '/api/Squad/' + squadId;
        return this._http.get<SquadInfo>(url);
    }
}