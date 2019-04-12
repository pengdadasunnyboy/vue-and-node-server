var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

//查询列表
router.get('/userAll', function(req, res){
    var sql = $sql.user.queryAll;
    conn.query(sql, function(err, result) {
        if (err) {
           return console.log(err);
        }
        if (result) {
            //str = JSON.stringify(result);
            //cleconsole.log(result);
            return  res.send(result);
        }
    })
});

// 增加用户接口
router.post('/addUser', function(req, res){
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.price, params.sex], function(err, result) {
        if (err) {
           return console.log(err);
        }
        if (result) {
            //jsonWrite(res, result);
            return res.send('添加成功');
        }
    })
});

//删除用户接口
router.post('/delUser/:id',function(req,res){
    var sql = $sql.user.delete;
    var params = req.body;
    conn.query(sql,[params.id],function(err,result){
        if(err){
            return console.log(err);
        }
        if(result){
            return res.send('删除成功');
        }
    })
})

module.exports = router;