import {PayloadData} from "../base";

export enum ReactionType
{
	like = 'like',
	kiss = 'kiss',
	laugh = 'laugh',
	wonder = 'wonder',
	cry = 'cry',
	angry = 'angry',
	facepalm = 'facepalm',
}

export type RawReaction = {
	messageId: number,
	reactionCounters: Record<ReactionType, number>
	reactionUsers: Record<ReactionType, number[]>
	ownReactions: ReactionType[]
}

export type ReactionUser = {
	id: number,
	name: string,
	avatar: string,
}

type ReactionsModelSetPayload = {
	reactions: RawReaction[],
	usersShort: ReactionUser[],
}

type ReactionsModelSetReactionPayload = {
	messageId: number,
	userId: number,
	reaction: ReactionType,
}

type ReactionsModelRemoveReactionPayload = {
	messageId: number,
	userId: number,
	reaction: ReactionType,
}

type ReactionsModelState = {
	messageId: number,
	// @ts-ignore
	ownReactions: Set<ReactionType>,
	reactionCounters: Record<ReactionType, number>,
	// @ts-ignore
	reactionUsers: Map<ReactionType, number[]>,
}

export type ReactionsModelActions =
	'messagesModel/reactionsModel/store'
	| 'messagesModel/reactionsModel/set'
	| 'messagesModel/reactionsModel/setFromLocalDatabase'
	| 'messagesModel/reactionsModel/setFromPullEvent'
	| 'messagesModel/reactionsModel/setReaction'
	| 'messagesModel/reactionsModel/removeReaction'


export type ReactionsModelMutation =
	'messagesModel/reactionsModel/store'
	| 'messagesModel/reactionsModel/set'
	| 'messagesModel/reactionsModel/add'
	| 'messagesModel/reactionsModel/updateWithId'


export interface ReactionsStoreData extends PayloadData
{
	reactionList: Array<ReactionsModelState>;
}


export type ReactionsSetActions =
	'setFromPullEvent'
	| 'set'
;
export interface ReactionsSetData extends PayloadData
{
	reactionList: Array<ReactionsModelState>;
}


export type ReactionsAddActions = 'setReaction';
export interface ReactionsAddData extends PayloadData
{
	reaction: ReactionsModelState;
}


export type ReactionsUpdateWithIdActions =
	'setReaction'
	| 'removeReaction'
;
export interface ReactionsUpdateWithIdData extends PayloadData
{
	reaction: ReactionsModelState;
}
