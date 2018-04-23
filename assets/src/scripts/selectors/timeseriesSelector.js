const { createSelector } = require('reselect');

export const variablesSelector = state => state.series.variables ? state.series.variables : null;

/**
 * @return {Object}     Variable details for the currently selected variable.
 */
export const currentVariableSelector = createSelector(
    variablesSelector,
    state => state.timeseriesState.currentVariableID,
    (variables, variableID) => {
        return variableID ? variables[variableID] : null;
    }
);

export const currentParmCdSelector = createSelector(
    currentVariableSelector,
    (currentVar) => {
        return currentVar && currentVar.variableCode ? currentVar.variableCode.value : null;
    }
);