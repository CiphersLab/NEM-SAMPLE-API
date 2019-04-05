import {  AssetHttp, AssetDefinition } from "nem-library";


export const  getMosaic =  (name: string): Promise<AssetDefinition[]> =>{
    return new Promise<AssetDefinition[]>((resolve,reject) => {
        const assetHttp = new AssetHttp();
        assetHttp.getAllAssetsGivenNamespace(name).subscribe(allMosaicInfo =>{
          resolve(allMosaicInfo);
        }, err => {
            reject(err);
        });
    });
};




