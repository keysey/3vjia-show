/**
 * Created by 毅 on 2016/8/22.
 * 应用的初始化运行入口文件
 */

var express = require('express');
var swig = require('swig');
var app = express();

/*
* 应用数据
* */
var data;

/*
* 中间件
* */
app.use(function(req, res, next) {
    data = {
        site_name: '子鼠博客',
        route_path: '/'
    };
    next();
});

//静态资源托管设置
app.use( '/public', express.static('public') );
app.use( '/image', express.static('image') );

//模板引擎设置
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});


/*
* 路由
* ******************************************************/

//首页
app.get('/', function(req, res) {
    res.render('index', data);
});

//注册
app.get('/register', function(req, res) {
    data.route_path = '/register';
    res.render('register', data);
});

//登录
app.get('/login', function(req, res) {
    data.route_path = '/login';
    res.render('login', data);
});

//发表
app.get('/post', function(req, res) {
    data.route_path = '/post';
    res.render('post', data);
});


//开启服务（监听）
app.listen(8888, 'localhost');
console.log('服务器已经开启成功');