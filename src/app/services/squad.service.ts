import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export abstract class BaseSquadService {
    abstract getSquadName(): Observable<string>;
}

@Injectable()
export class MockSquadService extends BaseSquadService {
    override getSquadName(): Observable<string> {
        return of('Setsaholics Anonymous');
    }
}