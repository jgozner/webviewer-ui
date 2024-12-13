import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import Flyout from '../Flyout';
import { Provider } from 'react-redux';
import DataElements from 'constants/dataElement';

import { expect } from '@storybook/test';

import core from 'core';
import { workerTypes } from 'src/constants/types';
import { OfficeEditorEditMode } from 'constants/officeEditor';
import { availableFontFaces, cssFontValues } from 'constants/officeEditorFonts';

export default {
  title: 'ModularComponents/OfficeEditorFlyout',
  component: Flyout,
  parameters: {
    customizableUI: true,
  },
};

const stylePresetDropdown = {
  dataElement: 'stylePresetDropdown',
  type: 'stylePresetDropdown',
};

const fontFaceDropdown = {
  dataElement: 'fontFaceDropdown',
  type: 'fontFaceDropdown',
};

const fontSizeDropdown = {
  dataElement: 'fontSizeDropdown',
  type: 'fontSizeDropdown',
};

const boldButton = {
  dataElement: 'boldButton',
  type: 'presetButton',
  buttonType: 'boldButton',
};

const italicButton = {
  dataElement: 'italicButton',
  type: 'presetButton',
  buttonType: 'italicButton',
};

const underlineButton = {
  dataElement: 'underlineButton',
  type: 'presetButton',
  buttonType: 'underlineButton',
};

const divider = 'divider';

const lineSpacingButton = {
  dataElement: 'lineSpacingButton',
  type: 'lineSpacingButton',
};

const orderedListButton = {
  dataElement: 'orderedListButton',
  type: 'orderedListButton',
};

const unorderedListButton = {
  dataElement: 'unorderedListButton',
  type: 'unorderedListButton',
};

const leftAlignButton = {
  dataElement: 'justifyLeftButton',
  type: 'presetButton',
  buttonType: 'justifyLeftButton'
};

const centerAlignButton = {
  dataElement: 'justifyCenterButton',
  type: 'presetButton',
  buttonType: 'justifyCenterButton',
};

const rightAlignButton = {
  dataElement: 'justifyRightButton',
  type: 'presetButton',
  buttonType: 'justifyRightButton',
};

const justifyBothButton = {
  dataElement: 'justifyBothButton',
  type: 'presetButton',
  buttonType: 'justifyBothButton',
};

const undoButton = {
  dataElement: 'undoButton',
  type: 'presetButton',
  buttonType: 'undoButton',
};

const redoButton = {
  dataElement: 'redoButton',
  type: 'presetButton',
  buttonType: 'redoButton',
};

const ColorPickerButton = {
  dataElement: DataElements.OFFICE_EDITOR_FLYOUT_COLOR_PICKER,
  type: 'presetButton',
  buttonType: DataElements.OFFICE_EDITOR_FLYOUT_COLOR_PICKER,
};

const activeColor = {
  'r': 0,
  'g': 255,
  'b': 0,
};

const initialState = {
  officeEditor: {
    cursorProperties: {
      bold: true,
      italic: true,
      underlineStyle: 'single',
      pointSize: 11,
      fontFace: 'Arial',
      color: activeColor,
      paragraphProperties: {
        justification: 'both',
        listType: 'ordered',
        lineHeight: undefined,
        lineHeightMultiplier: 1,
      },
      locationProperties: {},
    },
    selectionProperties: {
      paragraphProperties: {},
    },
    availableFontFaces,
    cssFontValues,
    editMode: OfficeEditorEditMode.EDITING
  },
  viewer: {
    isOfficeEditorMode: true,
    lastPickedToolForGroupedItems: {
      undefined: '',
    },
    toolButtonObjects: {},
    colorMap: {},
    disabledElements: {},
    customElementOverrides: {},
    openElements: {
      flyoutMenu: true,
      noIcons: true,
      [DataElements.MAIN_MENU]: true,
      menuWithComponentItems: true,
    },
    customPanels: [],
    genericPanels: [],
    focusedElementsStack: [],
    canUndo: {
      1: false,
      2: false,
    },
    canRedo: {
      1: false,
      2: false,
    },
    flyoutMap: {
      'flyoutMenu': {
        'dataElement': 'flyoutMenu',
        'items': [
          stylePresetDropdown,
          fontFaceDropdown,
          fontSizeDropdown,
          divider,
          boldButton,
          italicButton,
          underlineButton,
          divider,
          ColorPickerButton,
          divider,
          lineSpacingButton,
          divider,
          orderedListButton,
          unorderedListButton,
          divider,
          leftAlignButton,
          centerAlignButton,
          rightAlignButton,
          justifyBothButton,
          divider,
          undoButton,
          redoButton,
        ],
      },
    },
    flyoutPosition: { x: 0, y: 0 },
    activeFlyout: 'flyoutMenu',
    activeTabInPanel: {},
    modularComponents: {},
    modularHeaders: {},
    modularHeadersHeight: {
      topHeaders: 40,
      bottomHeaders: 40
    },
    customHeadersAdditionalProperties: {},
  },
  featureFlags: {
    customizableUI: true,
  }
};
const store = configureStore({
  reducer: () => initialState
});

export const FlyoutComponent = () => {
  core.getOfficeEditor = () => ({
    isTextSelected: () => false,
    isCursorInTable: () => false
  });
  core.getDocument = () => ({
    getType: () => workerTypes.OFFICE_EDITOR,
    addEventListener: () => { },
    removeEventListener: () => { },
  });
  window.Core.Annotations.Color = () => ({
    toString: () => 'rgba(0, 255, 0, 1)',
    // eslint-disable-next-line custom/no-hex-colors
    toHexString: () => '#00FF00',
  });

  return (
    <Provider store={store}>
      <Flyout />
    </Provider>
  );
};


FlyoutComponent.play = async ({ canvasElement }) => {
  // check style buttons active state
  const boldButton = canvasElement.querySelector('[data-element="boldButton"]');
  expect(boldButton.parentElement.classList.contains('active'), 'bold button should be active').toBe(true);
  const italicButton = canvasElement.querySelector('[data-element="italicButton"]');
  expect(italicButton.parentElement.classList.contains('active'), 'italic button should be active').toBe(true);
  const underlineButton = canvasElement.querySelector('[data-element="underlineButton"]');
  expect(underlineButton.parentElement.classList.contains('active'), 'underline button should be active').toBe(true);

  // check list type buttons active state
  const orderedListButton = canvasElement.querySelector('[data-element="orderedListButton"]');
  expect(orderedListButton.parentElement.classList.contains('active'), 'ordered list button should be active').toBe(true);
  const unorderedListButton = canvasElement.querySelector('[data-element="unorderedListButton"]');
  expect(unorderedListButton.parentElement.classList.contains('active'), 'unordered list button should be inactve').toBe(false);

  // check alignment buttons active state
  const leftAlignButton = canvasElement.querySelector('[data-element="justifyLeftButton"]');
  expect(leftAlignButton.parentElement.classList.contains('active'), 'justify left button should be inactive').toBe(false);
  const centerAlignButton = canvasElement.querySelector('[data-element="justifyCenterButton"]');
  expect(centerAlignButton.parentElement.classList.contains('active'), 'justify center button should be inactive').toBe(false);
  const rightAlignButton = canvasElement.querySelector('[data-element="justifyRightButton"]');
  expect(rightAlignButton.parentElement.classList.contains('active'), 'justify right button should be inactive').toBe(false);
  const justifyBothButton = canvasElement.querySelector('[data-element="justifyBothButton"]');
  expect(justifyBothButton.parentElement.classList.contains('active'), 'justify both button should be active').toBe(true);

  // check active color picker button
  const colorPickerButtonIcon = canvasElement.querySelector('[data-element="textColorButton"]');
  expect(colorPickerButtonIcon.style.color, 'color picker button should have correct color').toBe('rgb(0, 255, 0)');
};
