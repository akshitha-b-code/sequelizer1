const insert =(req,res)=>{
  const {firstName,lastName,email}=req.body;
  res.status(200).json({message:"user inserted"});
};


module.exports={insert};