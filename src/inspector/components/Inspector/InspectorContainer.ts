import { connect, MapDispatchToPropsFunction } from "react-redux";
import { IInspectorDispatch, IInspectorProps, Inspector } from "./Inspector";
import { setMainTabAction, setModeTabAction } from "../../actions/inspectorActions";
import { getMainTabID, getModeTabID, getActiveDescriptorContent, getActiveDescriptorReference } from "../../selectors/inspectorSelectors";
import { IRootState } from "../../../shared/store";


const mapStateToProps = (state: IRootState): IInspectorProps => {
	return {
		mainTab: getMainTabID(state),
		modeTab: getModeTabID(state),
		descriptorContent:getActiveDescriptorContent(state),
		originalReference:getActiveDescriptorReference(state),
	};
};

const mapDispatchToProps: MapDispatchToPropsFunction<IInspectorDispatch, Record<string, unknown>> = (dispatch):IInspectorDispatch => {
	return {
		setMainTab: (key) => dispatch(setMainTabAction(key)),
		setModeTab: (key)  => dispatch(setModeTabAction(key)),
	};
};

export const InspectorContainer = connect<IInspectorProps, IInspectorDispatch>(mapStateToProps, mapDispatchToProps)(Inspector);