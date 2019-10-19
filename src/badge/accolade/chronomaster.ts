import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Chronomaster: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "chronomaster",
    setTitleId: 946,
    names: [
        {value: "Chronomaster"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You are a proven master of Time Travel.`}
    ],
    notes: `Complete 50 Ouroboros missions`,
    links: [
        {title: "Chronomaster Badge", href: "https://paragonwiki.com/wiki/Chronomaster_Badge"}
    ]
};