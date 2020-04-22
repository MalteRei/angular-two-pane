import { IDuoPaneProperties } from './IDuoPaneProperties';
import { SpanningMode } from 'angular-duo-pane';

export class DuoPaneProperties implements IDuoPaneProperties {
    private PrimaryPanePercentageSingleSegment: number;
    public get primaryPanePercentageSingleSegment(): number {
        return this.PrimaryPanePercentageSingleSegment;
    }
    public set primaryPanePercentageSingleSegment(value: number) {
        this.PrimaryPanePercentageSingleSegment = value;
    }
    private EnsureSecondaryPaneVisible: boolean;
    public get ensureSecondaryPaneVisible(): boolean {
        return this.EnsureSecondaryPaneVisible;
    }
    public set ensureSecondaryPaneVisible(value: boolean) {
        this.EnsureSecondaryPaneVisible = value;
    }
    private TwoPaneMinWidthSingleSegment: number;
    public get twoPaneMinWidthSingleSegment(): number {
        return this.TwoPaneMinWidthSingleSegment;
    }
    public set twoPaneMinWidthSingleSegment(value: number) {
        this.TwoPaneMinWidthSingleSegment = value;
    }
    private TwoPaneMinHeightSingleSegment: number;
    public get twoPaneMinHeightSingleSegment(): number {
        return this.TwoPaneMinHeightSingleSegment;
    }
    public set twoPaneMinHeightSingleSegment(value: number) {
        this.TwoPaneMinHeightSingleSegment = value;
    }
    private TwoPaneSpanningModeSingleSegment: SpanningMode;
    public get twoPaneSpanningModeSingleSegment(): SpanningMode {
        return this.TwoPaneSpanningModeSingleSegment;
    }
    public set twoPaneSpanningModeSingleSegment(value: SpanningMode) {
        this.TwoPaneSpanningModeSingleSegment = value;
    }

    constructor(primaryPanePercentageSingleSegment: number, ensureSecondaryPaneVisible: boolean,
                twoPaneMinWidthSingleSegment: number, twoPaneMinHeightSingleSegment: number,
                twoPaneSpanningModeSingleSegment: SpanningMode) {
        this.primaryPanePercentageSingleSegment = primaryPanePercentageSingleSegment;
        this.ensureSecondaryPaneVisible = ensureSecondaryPaneVisible;
        this.twoPaneMinWidthSingleSegment = twoPaneMinWidthSingleSegment;
        this.twoPaneMinHeightSingleSegment = twoPaneMinHeightSingleSegment;
        this.twoPaneSpanningModeSingleSegment = twoPaneSpanningModeSingleSegment;
    }

}
