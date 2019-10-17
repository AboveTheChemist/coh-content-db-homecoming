import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const MayhemsCreator: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "mayhems-creator",
    names: [
        {value: "Mayhem's Creator"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You were personally responsible for the creation of a new villainess, Penelope Mayhem. What " +
        "she will do now is anyone's guess."}
    ],
    acquisition: "Complete the third story arc from Mr. G (Primal Earth)",
    links: [
        {title: "Mayhem's Creator Badge", href: "https://paragonwiki.com/wiki/Mayhem%27s_Creator_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png"}
    ],
};