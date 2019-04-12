// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into goods(id, name, price, sex) values (0, ?, ?, ?)',
        queryAll:'select * from goods',
        delete:"delete from goods where id = ?"  
    }
}
module.exports = sqlMap;