{"version":3,"file":"extension.map.js","names":["jn","define","require","exports","module","Loc","store","selectWholeUserById","ContextMenu","UserEnum","selectActions","showToast","Position","Actions","ActionMenu","constructor","userId","this","user","getState","contextMenu","show","actionsByState","id","currentUserId","env","actions","Object","values","filter","action","sort","a","b","Math","sign","length","position","BOTTOM","message","getMessage","time","layout","deleteInvitation","title","data","svgUri","onClickCallback","callAfterClose","list","fire","hire","reinvite","changeDepartment","confirmUserRequest","declineUserRequest","appointAdmin","callback","params","Promise","resolve","close","closeMenu"],"sources":["extension.js"],"mappings":"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"}