/* @flow */

import React from 'react';

import { IconMicSlash } from '../../../base/icons';
import { BaseIndicator } from '../../../base/react';

/**
 * The type of the React {@code Component} props of {@link AudioMutedIndicator}.
 */
type Props = {

    /**
     * From which side of the indicator the tooltip should appear from.
     */
    tooltipPosition: string
};

/**
 * React {@code Component} for showing an audio muted icon with a tooltip.
 *
 * @returns {Component}
 */
const AudioMutedIndicator = ({ tooltipPosition }: Props) => (
    <BaseIndicator
        icon = { IconMicSlash }
        iconId = 'mic-disabled'
        iconSize = { 16 }
        id = 'audioMuted'
        tooltipKey = 'videothumbnail.mute'
        tooltipPosition = { tooltipPosition } />
);

export default AudioMutedIndicator;
