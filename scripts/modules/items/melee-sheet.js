/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
import {Logger} from "../logger.js";
import {CofItemSheet} from "../items/item-sheet.js";

export class CofMeleeSheet extends CofItemSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["cof", "sheet", "melee"],
            template: System.templatesPath + "/items/melee-sheet.hbs",
            width: 400,
            height: 500,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}]
        });
    }
}
