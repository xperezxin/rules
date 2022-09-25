var body = $response.body;
var obj = JSON.parse(body);

objdata['result']['phone'] = '13608563057';
objdata['result']['time'] = '2022.09.26 11:12:13';
objdata['result']['message'] = 'UViUtoEcWKhnGk4jrXv5i6aoK41476g0NGP9TNvi87HhbfXK1VKk8uQCjOgS9hNV';
body = JSON.stringify(obj);

$done(body);