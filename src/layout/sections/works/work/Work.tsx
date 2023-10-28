import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from '../../../../components/common/Link.styles'
import { theme } from '../../../../styles/Theme'
import { StyledButton } from '../../../../components/common/Button.styled'

interface IWork {
	title: string
	text: string
	src: string
}

export const Work: FC<IWork> = (props) => {
	const { title, text, src } = props

	return (
		<StyledWork>
			<ImageWrapper>
				<Image src={src} />
				<StyledButton>View Project</StyledButton>
			</ImageWrapper>
			<Description>
				<Title>{title}</Title>
				<Text>{text}</Text>
				<Link href='#'>demo</Link>
				<Link href='#'>code</Link>
			</Description>
		</StyledWork>
	)
}

const StyledWork = styled.div`
  width: 100%;
  max-width: 540px;
  background-color: ${theme.colors.secondaryBgColor};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';

      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    ${StyledButton} {
      opacity: 1;
    }
  }

  ${StyledButton} {
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    &::before {
      width: 100%;
      height: 100%;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
  text-transform: capitalize;
`

const Text = styled.p`
  margin: 14px 0 10px;
`
