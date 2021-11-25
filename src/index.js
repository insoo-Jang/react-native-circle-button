import React from 'react'
import PropTypes from 'prop-types'
import {
    ToggleButtonContainer,
    ToggleButtonInner,
    ToggleButtonTitle,
} from './style'
import PowerOff from '../assets/powerOff.svg'

export default function CircleButton(props) {
    const {
        title,
        titleStyle,
        buttonStyle,
        buttonInnerStyle,
        shape = 'circle',
        disabled,
        onToggle,
        isOn,
        width = 100,
        height = 100,
    } = props

    return (
        <>
            <ToggleButtonContainer
                shape={shape}
                height={height}
                width={width}
                style={{
                    ...buttonStyle,
                }}
                onPress={onToggle}
                disabled={disabled}
            >
                <ToggleButtonInner
                    shape={shape}
                    width={width}
                    height={height}
                    isOn={isOn}
                    style={{
                        ...buttonInnerStyle,
                    }}
                >
                    <PowerOff
                        width={width - 60}
                        height={height - 60}
                        fill={isOn ? 'red' : '#1ACA5C'}
                    />
                </ToggleButtonInner>
            </ToggleButtonContainer>
            <ToggleButtonTitle style={{ ...titleStyle }}>
                {title}
            </ToggleButtonTitle>
        </>
    )
}

CircleButton.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    buttonInnerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
    shape: PropTypes.oneOf(['circle' | 'square']),
    disabled: PropTypes.bool,
    onToggle: PropTypes.func,
    isOn: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
}
