/** -----------------------------------------------------------------------
 * @module [TST]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/13] Deno Deploy Beta
 * -----------------------------------------------------------------------
 */

import { Uts, Rst } from "../../deps.ts";


export type ApgTstSpecsName = string;
export type ApgTstFramework = string;

export type ApgTstSpecResult = {
    date: Date,
    events: Uts.IApgUtsSpecEvent[]
}


export type ApgTstSpecResultStack = {
    maxItems: number,
    stack: ApgTstSpecResult[];
}

export type ApgTstSpecsResultsStacks = Map<ApgTstSpecsName, ApgTstSpecResultStack>;

export class ApgTstService {

    static readonly DEFAULT_STACK_SIZE = 10;

    private static _frameworksSpecs: Map<ApgTstFramework, ApgTstSpecsResultsStacks> = new Map();


    static Store(
        aframework: ApgTstFramework,
        aspecs: ApgTstSpecsName,
        aevents: Uts.IApgUtsSpecEvent[]
    ) {

        if (!this._frameworksSpecs.has(aframework)) {
            const specsMap: ApgTstSpecsResultsStacks = new Map();
            this._frameworksSpecs.set(aframework, specsMap);
        }

        const frameworkStack = this._frameworksSpecs.get(aframework)!;
        if (!frameworkStack.has(aspecs)) {
            const specsStack: ApgTstSpecResultStack = { maxItems: this.DEFAULT_STACK_SIZE, stack: [] };
            frameworkStack.set(aspecs, specsStack);
        }
        const specs = frameworkStack.get(aspecs)!;

        if (specs.stack.length == specs.maxItems) {
            specs.stack.splice(0, 1);
        }
        const specResult: ApgTstSpecResult = {
            date: new Date(),
            events: aevents
        }
        specs.stack.push(specResult);

        return new Rst.ApgRst();

    }

    static Frameworks() {
        const keys = this._frameworksSpecs.keys();
        const r = Array.from(keys).sort();
        return r;
    }

    static SpecsOfFramework(aframework: ApgTstFramework) {
        if (!this._frameworksSpecs.has(aframework)) {
            return [];
        }
        const frameworkSpecs = this._frameworksSpecs.get(aframework)!;
        const keys = frameworkSpecs.keys();
        const r = Array.from(keys).sort();
        return r;
    }

    static LastResultOfSpecs(aframework: ApgTstFramework, aspecs: ApgTstSpecsName) {
        if (!this._frameworksSpecs.has(aframework)) {
            return null;
        }
        const frameworkSpecs = this._frameworksSpecs.get(aframework)!;
        if (!frameworkSpecs.has(aspecs)) {
            return null;
        }
        const specs = frameworkSpecs.get(aspecs)!;
        const lastIndex = specs.stack.length - 1;
        const r = specs.stack[lastIndex];
        return r;
    }

    static ResultsOfSpecs(aframework: ApgTstFramework, aspecs: ApgTstSpecsName) {
        if (!this._frameworksSpecs.has(aframework)) {
            return [];
        }
        const frameworkSpecs = this._frameworksSpecs.get(aframework)!;
        if (!frameworkSpecs.has(aspecs)) {
            return [];
        }
        const specs = frameworkSpecs.get(aspecs)!;
        const r = specs.stack;
        return r;
    }

    /**
     * Get the events of the spec
     * @param aframework Name of th framework
     * @param aspecs Name of the specs
     * @param aindex If negative returns the last 
     * @returns List of events associated with the spec
     */
    static ResultOfSpec(aframework: ApgTstFramework, aspecs: ApgTstSpecsName, aindex: number) {

        if (isNaN(aindex)) { 
            return null;
        }

        if (!this._frameworksSpecs.has(aframework)) {
            return null;
        }

        const frameworkSpecs = this._frameworksSpecs.get(aframework)!;
        if (!frameworkSpecs.has(aspecs)) {
            return null;
        }

        const specs = frameworkSpecs.get(aspecs)!;
        if (aindex >= specs.stack.length) {
            return null;
        }
        if (specs.stack.length == 0) {
            return null;
        }

        // means last
        if (aindex < 0) {
            aindex = specs.stack.length - 1
        }

        const r = specs.stack[aindex];
        return r;
    }

}