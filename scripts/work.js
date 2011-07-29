var end=1e8,tmp=1;

postMessage('starting to count down from 1e8');

while(end) {
	
	end -= 1;
	tmp += end;
	if (end === 5e7) {
		postMessage('halfway there, I am at ' + tmp + ' now');
	}
}

postMessage('done');
