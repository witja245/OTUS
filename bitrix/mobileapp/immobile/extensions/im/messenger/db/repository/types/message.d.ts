import { MessagesModelState } from '../../../model/types/messages';
import { UsersModelState } from '../../../model/types/users';
import { FilesModelState } from '../../../model/types/files';
import { ReactionsModelState } from '../../../model/types/messages/reactions';

export interface MessageRepositoryPage {
	messageList: Array<MessagesModelState>,
	additionalMessageList: Array<MessagesModelState>,
	userList: Array<UsersModelState>,
	fileList: Array<FilesModelState>,
	reactionList: Array<ReactionsModelState>,
}

export interface MessageRepositoryContext extends MessageRepositoryPage {
	hasContextMessage: boolean,
}
