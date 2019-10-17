import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";

export const HamidonsEnemy: IBadgeData = {
    type: BadgeType.ACCOMPLISHMENT,
    key: "hamidons-enemy",
    names: [
        {value: "Hamidon's Enemy"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {value: "You went back to Imperial City to find anything useful, but while you were there, you decided " +
        "to send the Hamidon a message about who it shouldn't mess with."}
    ],
    acquisition: "Defeat a total combination of 40 Devouring Earth or The Infestedin the Inside Information mission",
    links: [
        {title: "Hamidon's Enemy Badge", href: "https://paragonwiki.com/wiki/Hamidon%27s_Enemy_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png"}
    ],
};