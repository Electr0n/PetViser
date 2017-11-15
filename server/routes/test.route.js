module.exports = (app) =>{
  app.get('/api/status',(req,res)=>{
    res.send('Welcome to Pet adviser');
  });
};
