'use strict';
const express = require('express');
const router = express.Router();
const PostController = require('../../controllers/PostController');

router.get('/', PostController.index);
router.post('/', PostController.create);
router.get('/:id', PostController.view);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

module.exports = router;