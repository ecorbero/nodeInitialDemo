const time =  (req, res) =>  {
    
  const newDate =(new Date()).toISOString().split('T');
  res.status(200).json({
      data: newDate[0],
      hora: newDate[1].substring(0,8)
  })
}


module.exports =  time;