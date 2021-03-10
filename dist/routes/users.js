"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = require("../controllers/UsersControllers");
const router = express_1.Router();
router.get('/', UsersControllers_1.getUsers);
router.get('/:id', UsersControllers_1.getUser);
router.post('/', UsersControllers_1.postUser);
router.put('/:id', UsersControllers_1.putUser);
router.delete('/:id', UsersControllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map