/**
 * Created by yuan on 2016/3/8.
 */
'use strict';

var http = require('http');
var fs = require('fs');
var url = require('url');

// ����������
http.createServer( function (request, response) {
    // �������󣬰����ļ���
    var pathname = url.parse(request.url).pathname;

    // ���������ļ���
    if(pathname == "/"){
        pathname = "/index.html"
    }
    // ���ļ�ϵͳ�ж�ȡ������ļ�����
    fs.readFile(pathname.substr(1), "binary", function (err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
        }else{
            if(pathname.indexOf('.css') != -1){
                //response.writeHead(200, {'Content-Type': 'text/css'});
                response.setHeader('Content-Type', 'text/css')
            }else if(pathname.indexOf('.woff') != -1) {
                response.setHeader('Content-Type', 'text/woff')
            }else {
                response.writeHead(200, {'Content-Type': 'text/html'});
            }

            // ��Ӧ�ļ�����
            //response.end(data.toString());
            response.write(data, "binary");
        }
        //  ������Ӧ����
        response.end();
    });
}).listen(8083);

// ����̨�����������Ϣ
console.log('Server running at http://127.0.0.1:8083/');