import React, { useRef, useLayoutEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

const Layout = () => {

	const { counter, increment } = useCounter(1);

	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)	
	const { quote} = !!data && data[0];

	const pTag = useRef()
	useLayoutEffect(() => {
		
		console.log(pTag.current.getBoundingClientRect())

	}, [quote])

	return (
		<div style={{padding: '70px'}}>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			<blockquote style={{display: 'flex'}} className="blockquote text-right">
				<p ref={pTag} className="mb-0">{quote}</p>
			</blockquote>
			
			<button className="btn btn-primary" onClick={increment}>Next Quote</button>
		</div>
	)
}

export default Layout