export const actionType = {
  SET_JSON: '@@set-json',
};

export function saveJson(json) {
  return { type: actionType.SET_JSON, payload: json };
}

