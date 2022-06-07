exports.getAllPost=(req,res)=>{
    let {category,page,filter}=req.query
    res.send('Read All Post')
}

exports.getSinglePost=(req,res)=>{
    res.send('Read All Post = ' + req.params.postId)
}

exports.createPost=(req,res)=>{
    res.send('Create All Post')
}

exports.createAllPost=(req,res)=>{
    res.send('Update All Post = ' + req.params.postId)
}

exports.deletePost=(req,res)=>{
    res.send('Delete All Post = ' + req.params.postId)
}