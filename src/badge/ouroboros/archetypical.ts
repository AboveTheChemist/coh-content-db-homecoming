import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Archetypical: IBadgeData = {
    type: BadgeType.OUROBOROS,
    key: "archetypical",
    setTitleId: 891,
    names: [
        {value: "Archetypical"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {type: Alternate.H, value: `You have completed a Task Force/Flashback between level 30 and 34 while only using your Primary and Secondary powersets.`},
        {type: Alternate.V, value: `You have completed a Strike Force/Flashback between level 30 and 34 while only using your Primary and Secondary powersets.`}
    ],
    acquisition: "Complete a level 30-34 Flashback arc using no pool powers.",
    links: [
        {title: "Archetypical Badge", href: "https://paragonwiki.com/wiki/Archetypical_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/archetypical.png"}]
};
