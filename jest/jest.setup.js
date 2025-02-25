import '@testing-library/jest-dom/extend-expect';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './miscMock';
import withI18n from './withI18n';
import withMockRedux from './withMockRedux';
import 'jest-canvas-mock';

global.withI18n = withI18n;
global.withMockRedux = withMockRedux;

global.withProviders = function withProviders(component, mockInitialState = {}) {
  const wrappedI18n = withI18n(component);
  const wrappedMockRedux = withMockRedux(wrappedI18n, mockInitialState);
  return wrappedMockRedux;
};

const portalElement = document.createElement('div');
portalElement.setAttribute('id', 'app');
document.body.appendChild(portalElement);