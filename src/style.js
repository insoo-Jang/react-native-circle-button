import styled from 'styled-components/native'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
} from 'react-native-responsive-dimensions'
import { fontSizeSet } from './size'
import { colorSet } from './colors'

export const TestView = styled.View`
    flex: 1;
    align-items: center;
    padding: 0;
`
TestView.displayName = 'TestView'
