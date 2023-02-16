const { v4: uuidv4 } = require("uuid");
const express = require('express');
const router = express.Router();

//instantiate mongodb 
const { db } = require('../mongo');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const blogs = await db()
  .collection('sample_blogs')
  .find({})
  .limit(5)
  .toArray(function(err, result){
      if (err) {
        res.status(400).send("error fetching blogs")
      } else {
        res.json(result);
      }
    }); 

    res.json({
      success:true,
      blogs: blogs
    });
    
});

//GET all blogs from database
router.get('/all', async function(req, res) {
    const blogs = await db()
    .collection('sample_blogs')
    .find({})
    .limit(5)
    .toArray(function(err, result){
        if (err) {
          res.status(400).send("error fetching blogs")
        } else {
          res.json(result);
        }
      }); 
      res.json({
        success:true,
        blogs: blogs
      });
      
  });

//GET one blog from database
  router.get('/get-one', async function(req, res) {
    const blogs = await db()
    .collection('sample_blogs')
    .find({})
    .limit(1)
    .toArray(function(err, result){
        if (err) {
          res.status(400).send("error fetching blogs")
        } else {
          res.json(result);
        }
      }); 
  
      res.json({
        success:true,
        blogs: blogs
      });
      
  });

//GET one blog from id search
  router.get('/get-one/:idToFind', async function(req, res) {
    const blogs = await db()
    .collection('sample_blogs')
    .findOne({
        id:req.params.id
    })
      res.json({
        success:true,
        blogs: blogs
      });
  });

//POST new blog
  router.post('/create-one', async function(req, res, next) {
    const blogs = await db()
    .collection('sample_blogs')
    .insertOne({    
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        category: req.body.category,
        last_modified: new Date(),
        })

      res.json({
        success:true,
        blogs: blogs
      });
  });

//  STRETCH GOALS :
//get-multi/ (GET): get multiple sorted results
//HINT: use find().sort() 
router.get('/get-multi', async function(req, res, next) {
  // console.log(req.params.opt1)
  const blogs = await db()
  .collection('sample_blogs')
  .find({title: { $in: [req.query.opt1,req.query.opt2,req.query.opt3]}})
  .sort(
    {title: 1, blogs: 1}
  )
  .toArray()

    res.json({
      success:true,
      blogs: blogs
    });
})



//delete-multi/ (GET): get multiple results
//HINT: use deleteMany()

router.get('/delete-multi', async function(req, res, next) {
  const idsToDelete = req.body
  .collection('sample_blogs')

    res.json({
      success:true,
      blogs: blogs
    });
})
  
module.exports = router;