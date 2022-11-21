import express from 'express';
import {PrismaClient} from '@prisma/client';
import cors from 'cors';
import {Request, Response} from "express-serve-static-core";

/**
 * Сервер слушающий запросы на порту 3001
 */


console.log('работаю');
const app = express();
app.use(cors());
app.use(express.json());
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: 'postgresql://postgres:11111111@localhost:5432/restaurant',
        },
    },
})

app.get('/', function (req, res) {
    res.send("ok");
});


/**
 * Контроллер по работе с категориями
 * @param app - приложение принимающее запросы
 * @param prisma - ORM работающая с базой
 */
app.get('/category', function (req, res) {
    prisma.category.findMany().then((data: any) => {
        res.send(data);
    });
});
app.post('/category/create', function (req: Request, res: Response) {
    prisma.category.create({
        data: {
            name: req.body.category.name
        }
    }).then((data: any) => {
        console.log(data);
        res.send(data);
    });
});

app.put('/category/update', function (req, res) {
    prisma.category.update({
        where: {
            id: req.body.id
        },
        data: {
            name: req.body.name,
            photo: req.body.photo
        }
    }).then(data => {
        res.send(data);
    });
});

app.delete('/category/', function (req, res) {
    prisma.category.delete({where: {id: req.body.id}}).then(data => {
        console.log(data);
        res.send("Ok");
    });
});

/**
 * Контроллер по работе с позициями блюд
 * @param app - приложение принимающее запросы
 * @param prisma - ORM работающая с базой
 */
app.get('/position', function (req, res) {
    const categoryId=parseInt(req.query.categoryId as any);
    prisma.position.findMany({
        where: {categoryId: categoryId}
    }).then((data: any) => {
        res.send(data);
    });
});
app.post('/position/create', function (req, res) {

    prisma.category.update({
        where: {
            id: req.body.position.category
        },
        data: {
            positions: {
                create: {
                    id: req.body.position.id,
                    name: req.body.position.name
                }
            },
        }
    }).then(data => {
        res.send(data);
    });
});

app.put('/position/update', function (req, res) {
    prisma.position.update({
        where: {
            id: req.body.position.id
        },
        data: {
            name: req.body.position.name,
            photo: req.body.position.photo
        }
    }).then(data => {
        res.send(data);
    });
});

app.delete('/position/', function (req, res) {
    prisma.position.delete({where: {id: req.body.id}}).then(data => {
        res.send("Ok");
    });
});

app.listen(3001);