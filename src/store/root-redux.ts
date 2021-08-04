import { Dispatch } from "redux";
import { DispatchAction } from "./root-reducer";

export interface StateProps {
    
};

export class RootDispatcher {

    private readonly dispatch: Dispatch<DispatchAction>;

    constructor(dispatch: Dispatch<DispatchAction>) {
        this.dispatch = dispatch;
    }
}