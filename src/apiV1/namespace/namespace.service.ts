import { Namespace, NamespaceHttp } from 'nem-library';

export const  getNamespace =  (id: number): Promise<Namespace[]> =>{
    return new Promise<Namespace[]>((resolve,reject) => {
        const accountHttp = new NamespaceHttp
        accountHttp.getRootNamespaces(id).subscribe(allNamespacesInfo =>{
          resolve(allNamespacesInfo);
        }, err => {
            reject(err);
        });
    });
};




