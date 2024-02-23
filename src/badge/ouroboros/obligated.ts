import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Obligated: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "obligated",
    setTitleId: 892,
    names: [
        {value: "Obligated"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 35 and 39 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 35 and 39 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 36-40 Flashback story arc using no pool powers. (Note: In game badge text is incorrect.)",
    links: [
        {title: "Obligated Badge", href: "https://homecoming.wiki/wiki/Obligated_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/obligated.png"}]
};
