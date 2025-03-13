<?php

return [
	'extensions' => [
		'type',
		'utils/object',
		'im:messenger/lib/feature',
		'im:chat/utils',
		'im:messenger/db/table',
		'im:messenger/lib/logger',
		'im:messenger/lib/utils',
		'im:messenger/lib/helper',
		'im:messenger/lib/permission-manager',
		'im:messenger/const',
	],
	'bundle' => [
		'./src/option',
		'./src/recent',
		'./src/dialog',
		'./src/file',
		'./src/user',
		'./src/message',
		'./src/temp-message',
		'./src/reaction',
		'./src/queue',
		'./src/smile',
		'./src/pin-message',
		'./src/copilot',
		'./src/validators/message',
		'./src/validators/pin',
		'./src/internal/dialog',
	],
];