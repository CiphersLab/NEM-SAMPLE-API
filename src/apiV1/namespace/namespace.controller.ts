import { Request, Response } from 'express';
import { getNamespace } from './namespace.service';
//import { async } from 'rxjs/internal/scheduler/async';
// const fs = require('fs');
// const path = require('path');

export default class NamespaceController {

  public getNamespace = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.body.id;
      console.log(id)
      const namespaceInfo = await getNamespace(id);
      return res.status(200).send({
        success: true,
        message: 'Name Spaces are successfully loaded',
        data: namespaceInfo
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

}
