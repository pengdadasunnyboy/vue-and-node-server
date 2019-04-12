import request from './request'

export function getAll(data){
    return request({
        url: 'user/userAll',
        method: 'get',
        data: data
    })
}

export function postNum(data){
    return request({
        url: 'user/addUser',
        method: 'post',
        data: data
    })
}

export function delNum(id){
    return request({
        url:   `user/delUser/${id}`,
        method: 'post',
        data: id
    })
}