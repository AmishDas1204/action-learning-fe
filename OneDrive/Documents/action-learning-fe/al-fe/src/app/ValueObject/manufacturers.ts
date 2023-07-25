export class Manufacturers{
    mfg_id:number
    mfg_name:string
    constructor(private _mfg_id:number, private _mfg_name:string){
        this.mfg_id = _mfg_id
        this.mfg_name = _mfg_name
    }
}