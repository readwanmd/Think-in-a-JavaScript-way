// console.log('Asynchronous JavaScript ');
/*
const takeOrder = (customer, callback) => {
	console.log(`take order for ${customer}`);
	callback(customer);
};

const processOrder = (customer, callback) => {
	console.log(`processing order for ${customer}`);

	setTimeout(() => {
		console.log(`cooking completed for ${customer}`);
		console.log(`order processed for ${customer}`);
		callback(customer);
	}, 3000);
};

const completeOrder = (customer) => {
	console.log(`completed order for ${customer}`);
};

takeOrder('Readwan', (customer) => {
	processOrder(customer, (customer) => {
		completeOrder(customer);
	});
});

takeOrder('Reeeeeeeeeeeeeadwan', (customer) => {
	processOrder(customer, (customer) => {
		completeOrder(customer);
	});
});

*/

{
	/* Peomise */
}

/*
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: 'Technical Meeting',
			location: 'Zoom',
			time: '10:00Pm',
		};
		resolve(meetingDetails);
	} else {
		reject(new Error('meeting already scheduled!'));
	}
});

const addToCalendar = (meetingDetails) => {
	// return new Promise((resolve, reject) => {
	// 	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
	// 	resolve(calendar);
	// });

	// alternate way

	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
	return Promise.resolve(calendar);
};

meeting
	.then(addToCalendar)
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});
*/

/*
const promise1 = Promise.resolve(`promise1 resolved`);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`promise2 resolved`);
	}, 2000);
});

// promise1.then((res) => {
// 	console.log(res);
// });
// promise2.then((res) => {
// 	console.log(res);
// });

Promise.all([promise1, promise2]).then((res) => {
	console.log(res);
});
 */

{
	/*Async , Await*/
}
const hasMeeting = 1;

const meeting = new Promise((resolve, reject) => {
	if (!hasMeeting) {
		const meetingDetails = {
			name: 'Technical Meeting',
			location: 'Zoom',
			time: '10:00Pm',
		};
		setTimeout(() => {
			resolve(meetingDetails);
		}, 2000);
	} else {
		reject(new Error('meeting already scheduled!'));
	}
});

const addToCalendar = (meetingDetails) => {
	const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
	return Promise.resolve(calendar);
};

async function myMeeting() {
	try {
		const meetingDetails = await meeting;
		const calendar = await addToCalendar(meetingDetails);
		console.log(calendar);
	} catch {
		console.log('err.meessage');
	}
}

myMeeting();
