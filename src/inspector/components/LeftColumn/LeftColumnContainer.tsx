import { connect, MapDispatchToPropsFunction } from "react-redux";
import { ILeftColumnDispatch, ILeftColumnProps, LeftColumn } from "./LeftColumn";
import { IRootState } from "../../../shared/store";
import { getTargetReference, getAutoUpdate, getAddAllowed, getPropertySettings, getLockedSelection, getPinnedSelection, getRemovableSelection, getSelectedDescriptorsUUID, getAllDescriptors, getActiveTargetReference, getActiveTargetDocument, getActiveTargetLayer, getActiveReferenceChannel, getActiveReferenceGuide, getActiveReferencePath, getActiveReferenceActionSet, getActiveReferenceActionItem, getActiveReferenceCommand, getActiveReferenceProperty, getSelectedTargetReference, getDescriptorsListView } from "../../selectors/inspectorSelectors";
import { setTargetReferenceAction, addDescriptorAction, setSelectedReferenceTypeAction, clearAction, pinDescAction, removeDescAction, lockDescAction } from "../../actions/inspectorActions";


const mapStateToProps = (state: IRootState): ILeftColumnProps => {
	return {
		targetReference: getTargetReference(state),
		autoUpdate: getAutoUpdate(state),
		addAllowed: getAddAllowed(state),
		selectedDescriptors: getSelectedDescriptorsUUID(state),
		propertySettings: getPropertySettings(state),
		lockedSelection: getLockedSelection(state),
		pinnedSelection: getPinnedSelection(state),
		removableSelection: getRemovableSelection(state),
		allDescriptors: getDescriptorsListView(state),
		selectedTargetReference: getSelectedTargetReference(state),
		activeTargetReference: getActiveTargetReference(state),
		activeTargetReferenceDocument: getActiveTargetDocument(state),
		activeTargetLayerReference: getActiveTargetLayer(state),
		activeReferenceChannel:getActiveReferenceChannel(state) ,
		activeReferenceGuide: getActiveReferenceGuide(state),
		activeReferencePath: getActiveReferencePath(state),
		activeReferenceActionSet:getActiveReferenceActionSet(state),
		activeReferenceActionItem:getActiveReferenceActionItem(state),
		activeReferenceCommand: getActiveReferenceCommand(state),
		activeReferenceProperty: getActiveReferenceProperty(state),
	};
};

const mapDispatchToProps: MapDispatchToPropsFunction<ILeftColumnDispatch, Record<string, unknown>> = (dispatch):ILeftColumnDispatch => {
	return {
		onSetTargetReference: (arg) => dispatch(setTargetReferenceAction(arg)),
		onAddDescriptor: (desc) => dispatch(addDescriptorAction(desc)),
		onSetSelectedReferenceType: (type) => dispatch(setSelectedReferenceTypeAction(type)),
		
		onClear: () => dispatch(clearAction()),
		onPin: (pin, arg) => dispatch(pinDescAction(pin, arg)),
		onRemove: (arg) => dispatch(removeDescAction(arg)),
		onLock: (lock, arg) => dispatch(lockDescAction(lock, arg)),
	};
};

export const LeftColumnContainer = connect<ILeftColumnProps, ILeftColumnDispatch>(mapStateToProps, mapDispatchToProps)(LeftColumn);