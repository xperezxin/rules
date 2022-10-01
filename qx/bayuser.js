var obj = JSON.parse($response.body); 

obj['allow_change_username'] = true;
obj['ip_region'] = '北京';
obj['is_staff'] = 1;

$done({body:JSON.stringify(obj)});
