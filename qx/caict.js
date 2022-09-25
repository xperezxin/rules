var obj = JSON.parse($response.body); 

// obj['result']['phone'] = '13608563057';
// obj['result']['time'] = '2022.09.26 11:12:13';
obj['result']['message'] = 'UViUtoEcWKhnGk4jrXv5i6aoK41476g0NGP9TNvi87HhbfXK1VKk8uQCjOgS9hNV';

$done({body:JSON.stringify(obj)});
