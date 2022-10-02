var obj = JSON.parse($response.body); 

// obj['result']['phone'] = '13608563057';
// obj['result']['time'] = '2022.09.26 11:12:13';
obj['result']['message'] = 'e7esGzQWl6eeqUhBtakGcaNSujG5U+5H4nXdk8QnEzM=';

$done({body:JSON.stringify(obj)});
