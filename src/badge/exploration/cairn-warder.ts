import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const CairnWarder: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cairn-warder",
    setTitleId: 130,
    names: [{value: "Cairn Warder"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [1026.0, 51.0, 218.0],
    badgeText: [{
        value: "Mortals erect petty monuments and cairns in the foolish pursuit of stemming the forces of Death. Mot has since sundered such vanities."
    }],
    notes: "Located in [map:echo-dark-astoria] in the far northeast corner of the zone under the northern side of a stone archway.",
    links: [
        {title: "Cairn Warder Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Cairn_Warder_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "3"
};
