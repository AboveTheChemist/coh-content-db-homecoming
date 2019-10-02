import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const Extractor: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "extractor",
    names: [
        {value: "Extractor"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: "You've rescued or kidnapped your first hostage during an Architect mission, earning yourself the Extractor badge."}],
    acquisition: "Rescue one required captive while on a Mission Architect mission.",
    links: [
        {title: "Extractor Badge", href: "https://paragonwiki.com/wiki/Extractor_Badge"}
    ],
    imageKeys: [{value: "core.ae.extractor"}]
};