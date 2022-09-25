var body = $response.body;
var obj = JSON.parse(body);

objdata['result']['message'] = 'UViUtoEcWKhnGk4jrXv5i6aoK41476g0NGP9TNvi87HhbfXK1VKk8uQCjOgS9hNV';
body = JSON.stringify(obj);

$done(body);