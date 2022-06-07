const router = require('express').Router()
const {
    getAllPost,
    getSinglePost,
    createPost,
    createAllPost,
    deletePost
} = require('./postController')


router.get('/', getAllPost)
router.get('/:postId', getSinglePost)


router.post('/', createPost)

router.put('/:postId', createAllPost)

router.delete('/:postId', deletePost)

module.exports = router