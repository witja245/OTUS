{"version":3,"file":"task-opener.map.js","names":["jn","define","require","exports","module","AppTheme","EventEmitter","Type","showToast","Position","TaskErrorCode","TaskDetails","TaskOpener","constructor","props","this","parentLayout","widgetParams","modal","titleParams","text","widgetTitle","backgroundColor","colors","bgSecondary","backdrop","onlyMediumPosition","mediumPositionPercent","navigationBarColor","swipeAllowed","swipeContentAllowed","horizontalSwipeAllowed","uid","taskId","customEventEmitter","createWithUid","componentParams","workflowId","targetUserId","readOnlyTimeline","showNotifications","layout","result","doTaskRequest","delegateRequest","finishRule","taskNotFound","exitButton","isFunction","generateExitButton","close","subscribeOnEvents","async","isResolved","Promise","resolve","openWidget","onReady","setListener","eventName","unsubscribeOnEvents","showComponent","eventCallbacks","errors","Array","isArray","length","firstError","isTaskNotFoundErrorCode","code","message","position","TOP","setRightButtons","request","taskRequest","Object","entries","forEach","callback","on","event","off"],"sources":["task-opener.js"],"mappings":"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"}