import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Flat: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "flat",
    setTitleId: 918,
    names: [
        {value: "Flat"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 20 and 24 while not using Inspirations.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 20 and 24 while not using Inspirations.`}
    ],
    acquisition: "Complete a level 20-24 Flashback arc using no inspirations.",
    links: [
        {title: "Flat Badge", href: "https://paragonwiki.com/wiki/Flat_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/flat.png"}]
};
