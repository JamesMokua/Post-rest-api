const { request } = require('express');
const express = require('express');

const router = express.Router();
const Post = require('../Models/Postsmodel');

//GETS ALL THE POSTS
router.get('/', async(req,res) => {
  try{
  const posts = await Post.find();
  res.json(posts);
  }catch(err){
res.json({message: err});
  }
})
router.get('/specific', (req,res) => {
    res.send('We are on specific');
})

//SUBMITS POST
router.post('/',async (req,res) => {
  const post = new Post({
      title: req.body.title,
      description: req.body.description
  });
try{
 const savedPost = await post.save()
  res.json(savedPost);
}catch(err){
 res.json({message: err});
}
})

//GETS SPECIFIC POST
router.get('/:postId', async(req,res) => {
    try{
    const specificPost = await Post.findById(req.params.postId);
    res.json(specificPost);
    }catch(err){
        res.json({message:err})
    }
})

//DELETE POST
router.delete('/:postId', async(req,res) => {
    try{
   const deletePost = await Post.remove({_id: req.params.postId});
   res.json(deletePost);
    }catch(err){
    res.json({message: err});
    }
})

//UPDATE POST
router.patch('/:postId', async(req,res) => {
    try{
   const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
   res.json(updatePost);
    }catch(err){
    res.json({message: err});
    }
})
 
module.exports = router;