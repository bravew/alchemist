import type { ITargetReferenceAM } from "../classes/GetInfo";
import type { Descriptor } from "photoshop/dist/types/UXP";


export type TTargetReference = "undefined" | "customDescriptor" | "featureData" | "allFromGenerator" | TPropertyClass;
export type TPropertyClass = "application" | "history" | "snapshot" | "layer" | "path" | "channel" | "document" | "guide" | "action";
export type TPropertyType = "hidden" | "optional" | "default";
export type TActiveInspectorTab = "content" | "difference" | "reference";
export type TViewType = "tree" | "raw";
export type TActiveSection = "descriptors" | "settings";

//export type TActiveTargetReference = null|Record<string, unknown>|ITargetReferenceApplication|ITargetReferenceCustomDescriptor|ITargetReferenceHistory|ITargetReferenceSnapshot|ITargetReferenceLayer|ITargetReferencePath|ITargetReferenceChannel|ITargetReferenceDocument|ITargetReferenceGuide|ITargetReferenceAction 

export type TBaseProperty = "undefined" | "notSpecified" | "anySpecified";
export type THistoryReference = "undefined" | "active" | number;
export type TSnapshotReference = "undefined" | "active" | number;
export type TDocumentReference = "undefined" | "active" | number;
export type TLayerReference = "undefined" | "active" | number;
export type TPathReference = "undefined" | "active" | "vectorMask" | "workPathIndex" | number;
export type TChannelReference = "undefined" | "active" | TChannelReferenceValid;
export type TChannelReferenceValid = "composite" | "RGB" | "red" | "green" | "blue" | "CMYK" | "black" | "cyan" | "magenta" | "yellow" | "lab" | "lightness" | "a" | "b" | "gray" | "monotone" | "duotone" | "tritone" | "quadtone" | "mask" | "transparencyEnum" | "filterMask" | number;
export type TGuideReference = "undefined" | "active" | number;
export type TActionSet = "undefined"|string;
export type TActionItem = "undefined"|string;
export type TActionCommand = "undefined" | string;

export type TSelectDescriptorOperation = "replace" | "add" | "subtract";
export interface IRefWrapper<T,D>{
	type: T
	data:D
}

export interface IInspectorState {
	activeSection: TActiveSection
	selectedReferenceType:TTargetReference
	targetReference: TTargetReferenceArr
	settings:ISettings
	inspector:IInspector
	descriptors:IDescriptor[]
}

export type TTargetReferenceArr = TActiveTargetReferenceArr[]

export type TActiveTargetReferenceArr = IRefWrapper<"application", ITargetReferenceApplication> |
	IRefWrapper<"customDescriptor", ITargetReferenceCustomDescriptor> |
	IRefWrapper<"history", ITargetReferenceHistory> |
	IRefWrapper<"snapshot", ITargetReferenceSnapshot> |
	IRefWrapper<"layer", ITargetReferenceLayer> |
	IRefWrapper<"path", ITargetReferencePath> |
	IRefWrapper<"channel", ITargetReferenceChannel> |
	IRefWrapper<"document", ITargetReferenceDocument> |
	IRefWrapper<"guide", ITargetReferenceGuide> |
	IRefWrapper<"action", ITargetReferenceAction>;

export interface ITargetReferenceApplication{
	property: string
}
export interface ITargetReferenceCustomDescriptor{
	category:string
}
export interface ITargetReferenceHistory{
	document: TDocumentReference,
	history: THistoryReference,
	property: string
}
export interface ITargetReferenceSnapshot{
	document: TDocumentReference,
	snapshot: TSnapshotReference,
	property: string
}
export interface ITargetReferenceLayer{
	document: TDocumentReference,
	layer:TLayerReference,
	property: string
}
export interface ITargetReferencePath{
	document: TDocumentReference,
	path:TPathReference,
	layer:TLayerReference,
	property: string
}
export interface ITargetReferenceChannel{
	document: TDocumentReference,
	channel:TChannelReference,
	layer:TLayerReference,
	property: string
}
export interface ITargetReferenceDocument{
	document: TDocumentReference,
	property: string
}
export interface ITargetReferenceGuide{
	document: TDocumentReference,
	guide:TGuideReference,
	property: string
}
export interface ITargetReferenceAction{
	actionset: string,
	action:string,
	command:string,
	property: string
}
/*export interface ITargetReferenceFeatureData{

}
export interface ITargetReferenceAllFromGenerator{

}*/


export interface ISettings{
	selectReferenceBeforeGet: boolean,
	autoUpdate: boolean,
	activeDescriptors:string[],
	properties:IPropertySettings[]
	maximumItems:number
}

export interface IPropertySettings {
	type: TPropertyClass
	list: IPropertyItem[]
}

export interface IPropertyItem {
	title: string,
	stringID: string,
	type: TPropertyType
}

export interface IInspector{
	activeTab:TActiveInspectorTab,
	content: IContent
	difference: IDifference
	reference: IReference
}

export interface IContent{
	viewType: TViewType
	treePath:string[]
}

export interface IDifference{
	viewType: TViewType
	treePath:string[]
}

export interface IReference {
	showOptionalDocumentReference: boolean
}

export interface IDescriptor{
	id: string
	selected: boolean
	startTime: number
	endTime: number
	pinned: boolean,
	locked: boolean,
	originalReference: ITargetReferenceAM,
	originalData: Descriptor[]
}