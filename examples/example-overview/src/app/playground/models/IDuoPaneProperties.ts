import { SpanningMode } from 'duo-pane-library';

export interface IDuoPaneProperties{
    primaryPanePercentageSingleSegment: number;
    ensureSecondaryPaneVisible: boolean;
    twoPaneMinWidthSingleSegment: number;
    twoPaneMinHeightSingleSegment: number;
    twoPaneSpanningModeSingleSegment: SpanningMode;
}