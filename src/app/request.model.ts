import { ArrayType } from '@angular/compiler/src/output/output_ast';

export interface Request {
    _id : number;
    requests:string;
    contactno:number;
    amount:number;
    status:string;
    donate:number;
    userId:string
}
