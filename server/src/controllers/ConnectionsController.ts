import {Request, Response} from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(request: Request, response: Response) {

     }

    async create(request: Request, response: Response) {
     const { user_id } = request.body;

    await db('conections').insert({
        user_id,
    });
}
}