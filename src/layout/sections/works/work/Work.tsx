import React, { FC } from 'react'
import styled from 'styled-components'

interface IWork {
	title: string
	text: string
	src: string
}

export const Work: FC<IWork> = (props) => {
	const { title, text, src } = props

	return (
		<StyledWork>
			<Image src={src} />
			<Title>{title}</Title>
			<Text>{text}</Text>
			<Link href='#'>demo</Link>
			<Link href='#'>code</Link>
		</StyledWork>
	)
}

const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: khaki;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`