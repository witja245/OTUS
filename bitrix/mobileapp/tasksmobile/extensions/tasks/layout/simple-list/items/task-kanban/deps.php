<?php

return [
	'extensions' => [
		'layout/pure-component',
		'layout/ui/counter-view',
		'layout/ui/fields/file',
		'layout/ui/safe-image',
		'layout/ui/simple-list/items/extended',
		'utils/color',
		'utils/date',
		'utils/date/formats',
		'utils/object',
		'utils/skeleton',
		'utils/url',
		'statemanager/redux/connect',
		'statemanager/redux/slices/users',

		'tasks:enum',
		'tasks:loc',
		'tasks:layout/deadline-pill',
		'tasks:layout/stage-selector',
		'tasks:layout/task/fields/crm',
		'tasks:layout/task/fields/mark',
		'tasks:layout/task/fields/project',
		'tasks:layout/task/fields/tags',
		'tasks:layout/task/fields/accomplices',
		'tasks:layout/task/fields/auditors',
		'tasks:statemanager/redux/slices/groups',
		'tasks:statemanager/redux/slices/tasks',
		'tasks:statemanager/redux/slices/stage-settings',
		'tasks:statemanager/redux/slices/tasks-stages',
		'tasks:statemanager/redux/slices/kanban-settings',
	],
	'bundle' => [
		'./src/field',
		'./src/task-kanban-content',
	],
];
