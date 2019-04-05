import { Request, Response } from 'express';
import { getMosaic } from './mosaic.service';
//import { async } from 'rxjs/internal/scheduler/async';
// const fs = require('fs');
// const path = require('path');

export default class MosaicController {

  public getMosaic = async (req: Request, res: Response): Promise<any> => {
    try {
      const name = req.body.name;
      const namespaceInfo = await getMosaic(name);
      return res.status(200).send({
        success: true,
        message: 'Mosaic are successfully loaded',
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
