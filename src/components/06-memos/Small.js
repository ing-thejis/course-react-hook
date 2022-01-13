import React, { memo } from 'react'

const Small = memo(({value}) => {

	console.log('usando Memo')
	return (
		<small>
			{value}
		</small>
	)
})

export default Small