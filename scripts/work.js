var end=1e8,tmp=1;

postMessage('start');

while(end) {
	
	end -= 1;
	tmp += end;
	if (end === 5e7) {
		postMessage('halfway there, tmp is now ' + tmp);
	}
}

postMessage('done');
