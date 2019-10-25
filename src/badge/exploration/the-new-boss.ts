import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {UndergroundNeutropolis} from "../../map/underground-neutropolis";

export const TheNewBoss: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "the-new-boss",
    setTitleId: 1748,
    names: [{value: "The New Boss"}],
    alignment: ALIGNMENT_ANY,
    mapKey: UndergroundNeutropolis.key,
    location: [-399.0, -1200.0, -2696.0],
    badgeText: [{
        value: "Clockwork captured or appropriated by the Resistance are reprogrammed here, using taps into the Neutropolis wide area networks to speed the process." +
            " Some become soldiers, others servants; a few become bombs, designed to go back to scrubbing off graffiti and tending flowers until the right trigger is sent." +
            " Then... 'kaboom.' The Clockwork so reprogrammed are not given a choice in the matter."
    }],
    notes: "Located in [map:underground-neutropolis] 263 yards NW of the Resistance Surface Access.",
    links: [
        {title: "The New Boss Badge", href: "https://paragonwiki.com/wiki/The_New_Boss_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "8"
};
