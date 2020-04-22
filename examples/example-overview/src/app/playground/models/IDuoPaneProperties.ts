import { SpanningMode } from 'angular-duo-pane';

export interface IDuoPaneProperties{
    primaryPanePercentageSingleSegment: number;
    ensureSecondaryPaneVisible: boolean;
    twoPaneMinWidthSingleSegment: number;
    twoPaneMinHeightSingleSegment: number;
    twoPaneSpanningModeSingleSegment: SpanningMode;
}