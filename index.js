var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();




setTimeout(() => {
    
    // data.append('media', fs.createReadStream('/Users/hari/Downloads/pixel.jpg'));
    // data.append('media', fs.createReadStream('/Users/hari/Downloads/css.mp4'));
    // data.append('something', 'something');
    data.append('task_id', '2000');
data.append('user_id', '3');
// data.append('mouse_move', '2345');
// data.append('mouse_click', '345234');
data.append('timesheet_id', '8001');

    var config = {
      method: 'post',
      url: 'http://localhost:3000/all-task-records',
      headers: { 
        'Authorization': '', 
        ...data.getHeaders()
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log("++++++++++++", JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("$$$$$$$$$$$$", error);
    });
    

}, 5000);