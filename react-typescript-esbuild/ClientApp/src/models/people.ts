import { observer } from "mobx-react-lite"
import { action, makeAutoObservable, makeObservable, observable, override } from "mobx"

export default class Person {
    id: number
    name: string
    levelOfExpertise: string
    constructor() {
        makeAutoObservable(this);
    }

    set changeLevelOfExpertise(newLevel: string) {
        this.levelOfExpertise = newLevel;
    }
}