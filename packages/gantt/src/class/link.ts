import { GanttDate } from '../utils/date';
import { GanttItem } from './item';

export enum GanttLinkType {
    fs = 0,
    ss = 1,
    ff = 2,
    sf = 3
}

export enum LinkColors {
    default = '#cacaca',
    blocked = '#FF7575',
    active = '#348FE4'
}

export interface GanttLink {
    type: GanttLinkType;
    link: string;
}

export interface GanttLinkItem {
    id: string;
    before: { x: number; y: number };
    after: { x: number; y: number };
    start: GanttDate;
    end: GanttDate;
    origin: GanttItem;
    links: GanttLink[];
}

export interface LinkInternal {
    path: string;
    source: GanttItem;
    target: GanttItem;
    color: LinkColors;
    type: GanttLinkType;
}