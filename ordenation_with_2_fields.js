let structureNodeForm = [
  {
    _id: '2',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Context',
    stepPosition: 2,
    sectionName: '',
    sectionPosition: 1,
    fieldName: 'Data Node Name',
    fieldPosition: 2,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'Data Node 1 - delivery time prediction for products',
    styles: {
      columns: 7,
    },
  },
  {
    _id: '1',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Registration',
    stepPosition: 1,
    sectionName: '',
    sectionPosition: 2,
    fieldName: 'Data Node Code:',
    fieldPosition: 2,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'AN1-KN1',
    styles: {
      columns: 1,
    },
  },
  {
    _id: '4',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Context',
    stepPosition: 2,
    sectionName: '',
    sectionPosition: 1,
    fieldName: 'Data Node Name',
    fieldPosition: 1,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'Data Node 1 - delivery time prediction for products',
    styles: {
      columns: 7,
    },
  },
  {
    _id: '1',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Registration',
    stepPosition: 1,
    sectionName: '',
    sectionPosition: 2,
    fieldName: 'Data Node Code:',
    fieldPosition: 3,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'AN1-KN1',
    styles: {
      columns: 1,
    },
  },
  {
    _id: '1',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Registration',
    stepPosition: 1,
    sectionName: '',
    sectionPosition: 1,
    fieldName: 'Data Node Code:',
    fieldPosition: 2,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'AN1-KN1',
    styles: {
      columns: 1,
    },
  },
  {
    _id: '3',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Registration',
    stepPosition: 1,
    sectionName: '',
    sectionPosition: 1,
    fieldName: 'Data Node Code:',
    fieldPosition: 1,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'AN1-KN1',
    styles: {
      columns: 1,
    },
  },
  {
    _id: '3',
    asset_id: 'node-123456',
    datakey: 'nodeForm',
    stepName: 'Registration',
    stepPosition: 1,
    sectionName: '',
    sectionPosition: 2,
    fieldName: 'Data Node Code:',
    fieldPosition: 1,
    fieldType: 'text',
    defaultValue: '',
    placeHolder: 'AN1-KN1',
    styles: {
      columns: 1,
    },
  },
];

structureNodeForm = structureNodeForm.sort((a, b) => {
  if (a.stepPosition < b.stepPosition) {
    return -1;
  }
  if (a.stepPosition > b.stepPosition) {
    return 1;
  }
  return 0;
});

structureNodeForm

let steps = [];

steps

structureNodeForm.forEach((item) => {
  const ind = steps.findIndex((step) => step.stepPosition === item.stepPosition);

  if (ind !== -1) {
    steps[ind].fields.push(item);
    steps[ind].fields.sort((a, b) => {
      if (a.sectionPosition === b.sectionPosition) {
        return a.fieldPosition < b.fieldPosition ? -1 : 1;
      }
      return a.sectionPosition < b.sectionPosition ? -1 : 1;
    });
  } else {
    steps.push({
      stepName: item.stepName,
      stepPosition: item.stepPosition,
      fields: [item],
    });
  }
});

console.log(steps[0]);