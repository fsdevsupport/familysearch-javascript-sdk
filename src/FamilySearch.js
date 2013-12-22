define([
  'init',
  'authentication',
  'changeHistory',
  'discussions',
  'memories',
  'notes',
  'parentsAndChildren',
  'pedigree',
  'person',
  'searchAndMatch',
  'sourceBox',
  'sources',
  'spouses',
  'user',
  'plumbing'
], function(init, authentication, changeHistory, discussions, memories, notes, parentsAndChildren, pedigree, person,
            searchAndMatch, sourceBox, sources, spouses, user, plumbing) {
  return {
    init: init.init,

    // authentication
    getAuthCode: authentication.getAuthCode,
    getAccessToken: authentication.getAccessToken,
    hasAccessToken: authentication.hasAccessToken,
    invalidateAccessToken: authentication.invalidateAccessToken,

    // TODO authorities

    // changeHistory
    Change: changeHistory.Change,
    getPersonChanges: changeHistory.getPersonChanges,
    getChildAndParentsChanges: changeHistory.getChildAndParentsChanges,
    getCoupleChanges: changeHistory.getCoupleChanges,

    // TODO discovery

    // discussions
    Discussion: discussions.Discussion,
    Comment: discussions.Comment,
    getPersonDiscussionRefs: discussions.getPersonDiscussionRefs,
    getDiscussion: discussions.getDiscussion,
    getMultiDiscussion: discussions.getMultiDiscussion,
    getComments: discussions.getComments,

    // memories
    Memory: memories.Memory,
    MemoryRef: memories.MemoryRef,
    getPersonMemoryRefs: memories.getPersonMemoryRefs,
    getMemory: memories.getMemory,
    getMemoryComments: memories.getMemoryComments,
    getMemoryPersonas: memories.getMemoryPersonas,
    getPersonPortraitURL: memories.getPersonPortraitURL,
    getPersonMemoriesQuery: memories.getPersonMemoriesQuery,
    getUserMemoriesQuery: memories.getUserMemoriesQuery,

    // notes
    Note: notes.Note,
    NoteRef: notes.NoteRef,
    getPersonNoteRefs: notes.getPersonNoteRefs,
    getPersonNote: notes.getPersonNote,
    getMultiPersonNote: notes.getMultiPersonNote,
    getCoupleNoteRefs: notes.getCoupleNoteRefs,
    getCoupleNote: notes.getCoupleNote,
    getMultiCoupleNote: notes.getMultiCoupleNote,
    getChildAndParentsNoteRefs: notes.getChildAndParentsNoteRefs,
    getChildAndParentsNote: notes.getChildAndParentsNote,
    getMultiChildAndParentsNote: notes.getMultiChildAndParentsNote,

    // TODO ordinances

    // parents and children
    getChildAndParents: parentsAndChildren.getChildAndParents,

    // pedigree
    getAncestry: pedigree.getAncestry,
    getDescendancy: pedigree.getDescendancy,

    // person
    Person: person.Person,
    Name: person.Name,
    Fact: person.Fact,
    ChildAndParents: person.ChildAndParents,
    Couple: person.Couple,
    ParentChild: person.ParentChild,
    getPerson: person.getPerson,
    getMultiPerson: person.getMultiPerson,
    getPersonWithRelationships: person.getPersonWithRelationships,
    getPersonChangeSummary: person.getPersonChangeSummary,
    getRelationshipsToSpouses: person.getRelationshipsToSpouses,
    getRelationshipsToParents: person.getRelationshipsToParents,
    getRelationshipsToChildren: person.getRelationshipsToChildren,

    // search and match
    SearchResult: searchAndMatch.SearchResult,
    getPersonSearch: searchAndMatch.getPersonSearch,
    getPersonMatches: searchAndMatch.getPersonMatches,
    getPersonMatchesQuery: searchAndMatch.getPersonMatchesQuery,

    // sourceBox
    Collection: sourceBox.Collection,
    getCollectionsForUser: sourceBox.getCollectionsForUser,
    getCollection: sourceBox.getCollection,
    getCollectionSourceDescriptions: sourceBox.getCollectionSourceDescriptions,
    getCollectionSourceDescriptionsForUser: sourceBox.getCollectionSourceDescriptionsForUser,

    // sources
    SourceDescription: sources.SourceDescription,
    SourceRef: sources.SourceRef,
    IdSourceRef: sources.IdSourceRef,
    getPersonSourceRefs: sources.getPersonSourceRefs,
    getSourceDescription: sources.getSourceDescription,
    getMultiSourceDescription: sources.getMultiSourceDescription,
    getCoupleSourceRefs: sources.getCoupleSourceRefs,
    getChildAndParentsSourceRefs: sources.getChildAndParentsSourceRefs,
    getSourceRefsQuery: sources.getSourceRefsQuery,

    // spouses
    getCouple: spouses.getCouple,

    // user
    Agent: user.Agent,
    User: user.User,
    getCurrentUser: user.getCurrentUser,
    getCurrentUserPersonId: user.getCurrentUserPersonId,
    getAgent: user.getAgent,
    getMultiAgent: user.getMultiAgent,

    // plumbing
    get: plumbing.get,
    post: plumbing.post,
    put: plumbing.put,
    del: plumbing.del,
    http: plumbing.http,
    getTotalProcessingTime: plumbing.getTotalProcessingTime,
    setTotalProcessingTime: plumbing.setTotalProcessingTime
  };
});