import { useState, useLayoutEffect } from 'react'

const useObservable = observable => {
	const [state, setState] = useState();

	useLayoutEffect(() => {
		const sub = observable.subscribe(setState);
		return () => sub.unsubscribe();
	}, []);

	return state;
};

export default useObservable
