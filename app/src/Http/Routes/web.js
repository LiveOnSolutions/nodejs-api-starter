const Users = server => {
  /**
   * @api {GET} /v1/users Listagem
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiHeader {String} Authorization='bearer bd970a05XXXXXXXXXXXXXXXXXXXXXX'
   *
   *
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *  {
   *     "data": {
   *       "users": [
   *          {
   *            "id": 10,
   *            "name": "Pessoa da silva",
   *            "email": "pessoa.silva@gmail.com",
   *            "createdAt": "2019-10-09T01:41:23.000Z",
   *            "updatedAt": "2019-10-09T01:41:23.000Z"
   *          },
   *        ....
   *      ]
   *       "code": 200
   *     }
   *   }
   * @apiError UsersNotFound Users not found
   * @apiErrorExample Error-Response UserNotFound
   *  {
   *     "data": {
   *       "message": "Users not found",
   *       "code": 404
   *     }
   *   }
   */
  server.get('/v1/users', (re, res) => {
    res.send('/v1/users');
  });

  /**
   * @api {GET} /v1/user/:id Encontrar Por ID
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiHeader {String} Authorization='bearer bd970a05XXXXXXXXXXXXXXXXXXXXXX'
   *
   * @apiParam {Number} id Código do usuário
   *
   * @apiSuccessExample {json} Success
   *  HTTP/1.1 200 OK
   *  {
   *     "data": {
   *       "user": {
   *         "id": 10,
   *         "name": "Pessoa da silva",
   *         "email": "pessoa.silva@gmail.com",
   *         "createdAt": "2019-10-09T01:41:23.000Z",
   *         "updatedAt": "2019-10-09T01:41:23.000Z"
   *       },
   *       "code": 200
   *     }
   *   }
   * @apiError UserNotFound A user not found
   * @apiErrorExample Error-Response UserNotFound
   *  {
   *     "data": {
   *       "message": "User not found",
   *       "code": 404
   *     }
   *   }
   */
  server.get('/v1/user/:id', (re, res) => {
    res.send('/v1/users/:id');
  });

  /**
   * @api {POST} /v1/user Criar
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiHeader {String} Authorization='bearer bd970a05XXXXXXXXXXXXXXXXXXXXXX'
   *
   * @apiParam {String} name Nome do usuário
   * @apiParam {String} email E-mail do usuário
   * @apiParam {String} password Senha do usuário
   *
   * @apiSuccessExample {json} Payload
   *    {
   *       "name": "Pessoa da silva",
   *       "email": "pessoa.silva@email.com",
   *       "password": "minh4Senh@",
   *     }
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *       "user": {
   *           "id": 13,
   *           "name": "Pessoa da silva",
   *           "email": "pessoa.silva@email.com",
   *           "password": "$2a$10$H/HOU5gj6QxV.4CpiXEhV.YQp6S/PB5YQDKG4tPiO3ogD4cmDikYm",
   *           "updatedAt": "2019-10-10T18:42:04.570Z",
   *           "createdAt": "2019-10-10T18:42:04.570Z"
   *         }
   *    }
   *
   * @apiError EmailInUse A user is already using this email
   * @apiErrorExample Error-Response EmailInUse
   *   {
   *      "data": {
   *        "message": "A user is already using this email",
   *        "code": 401
   *      }
   *   }
   */
  server.post('/v1/user', (re, res) => {
    res.send('/v1/user');
  });

  /**
   * @api {PUT} /v1/user/:id Atualizar
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiHeader {String} Authorization='bearer bd970a05XXXXXXXXXXXXXXXXXXXXXX'
   *
   * @apiParam {Number} id Código do usuário
   *
   * @apiParam {String} name Nome do usuário
   * @apiParam {String} email E-mail do usuário
   * @apiParam {String} password Senha do usuário
   *
   * @apiSuccessExample {json} Payload
   *    {
   *       "name": "Pessoa da silva",
   *       "email": "pessoa.silva@email.com",
   *       "password": "minh4Senh@",
   *     }
   *
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *       "user": {
   *           "id": 13,
   *           "name": "Pessoa da silva",
   *           "email": "pessoa.silva@email.com",
   *           "password": "$2a$10$H/HOU5gj6QxV.4CpiXEhV.YQp6S/PB5YQDKG4tPiO3ogD4cmDikYm",
   *           "updatedAt": "2019-10-10T18:42:04.570Z",
   *           "createdAt": "2019-10-10T18:42:04.570Z"
   *         }
   *    }
   *
   * @apiError UsersNotFound Users not found
   * @apiErrorExample Error-Response UserNotFound
   *  {
   *     "data": {
   *       "message": "Users not found",
   *       "code": 404
   *     }
   *   }
   */
  server.put('/v1/user/:id', (re, res) => {
    res.send('/v1/user/:id');
  });

  /**
   * @api {POST} /v1/check-email-in-use Validar e-mail em uso
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiHeader {String} Authorization='bearer bd970a05XXXXXXXXXXXXXXXXXXXXXX'
   *
   * @apiParam {String} email E-mail do usuário
   *
   * @apiSuccessExample {json} Payload
   *    {
   *       "email": "pessoa.silva@email.com"
   *    }
   *
   * @apiSuccessExample {json} Success
   *   HTTP/1.1 200 OK
   *   {
   *     "data": {
   *       "message": "Email available",
   *       "code": 200
   *     }
   *   }
   *
   * @apiError UsersNotFound Users not found
   * @apiErrorExample Error-Response UserNotFound
   *    {
   *      "data": {
   *        "message": "Email in use",
   *        "code": 401
   *      }
   *    }
   */
  server.post('/v1/check-email-in-use', (re, res) => {
    res.send('/v1/check-email-in-use');
  });
};

module.exports = Users;
