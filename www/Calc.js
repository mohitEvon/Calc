var exec = require('cordova/exec');

module.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Calc', 'coolMethod', [arg0]);
};

module.exports.add = function(arg0,success,error)
{
    exec(success , error , 'Calc' , 'add' , [arg0])
}

module.exports.remove = function(arg0,success,error)
{
    exec(success , error , 'Calc' , 'remove' , [arg0])
}
