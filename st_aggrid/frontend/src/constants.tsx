//items commented are not JSON serializable
const eventDataWhiteList =  [
    'afterDataChange',
    'afterFloatingFilter',
    'afterScroll',
    //'aggFunc',
    'animate',
    //'cellRange',
    'cells',
    'chartId',
    //'chartOptions',
    'chartThemeName',
    //'chartType',
    'clientHeight',
    'clientWidth',
    'colDef.cellDataType',
    'colDef.field',
    'colDef.headerName',
    'colDef.type',
    'columns',
    'columns.actualWidth',
    'columns.aggregationActive',
    'columns.autoHeaderHeight',
    'columns.colId',
    'columns.fieldContainsDots',
    'columns.filterActive',
    'columns.firstRightPinned',
    'columns.lastLeftPinned',
    'columns.left',
    'columns.menuVisible',
    'columns.moving',
    'columns.pinned',
    'columns.pivotActive',
    'columns.primary',
    'columns.rowGroupActive',
    'columns.sortIndex',
    'columns.tooltipEnabled',
    'columns.tooltipFieldContainsDots',
    'columns.visible',
    //'columnGroup',
    //'columnGroups',
    //'columns',
    'data',
    //'direction',
    //'eGui',
    'enabled',
    'ended',
    //'event',
    //'eventPath',
    'expanded',
    //'filterInstance',
    'finalRange',
    'finished',
    'firstRow',
    'firstRowData',
    //'flexColumns',
    'floating',
    'forceBrowserFocus',
    'fromBelow',
    'fromEnterKey',
    'id',
    'initialRange',
    'isFullWidthCell',
    //'items',
    'keepRenderedRows',
    'keepUndoRedoStack',
    'key',
    'lastRow',
    'left',
    'message',
    'name',
    'newData',
    'newPage',
    'newPageSize',
    'newValue',
    //'node',
    //'nodes',
    'oldValue',
    'operationPerformed',
    'overIndex',
    //'overNode',
    //'parentGui',
    'pinned',
    'preventScrollOnBrowserFocus',
    'previousValue',
    //'results',
    'route',
    'rowIndex',
    'rowPinned',
    'selected',
    'source',
    'source',
    'sources',
    'started',
    //'state',
    'switchingTab',
    'switchingToolPanel',
    //'target',
    'toIndex',
    //'tooltipGui',
    'top',
    'type',
    'value',
    'valueChanged',
    'vDirection',
    'visible',
    'width',
    'y'
]

export { eventDataWhiteList}