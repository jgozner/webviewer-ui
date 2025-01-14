import React, { useState } from 'react';
import PageThumbnailsGrid from './PageThumbnailsGrid';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

export default {
  title: 'Components/PageThumbnailsGrid',
  component: PageThumbnailsGrid,
  parameters: {
    customizableUI: true,
  }
};

function noop() { }

const initialState = {
  viewer: {
    disabledElements: {},
    customElementOverrides: {},
  }
};

const store = configureStore({
  reducer: () => initialState
});

export const EmptyGrid = () => (
  <Provider store={store}>
    <PageThumbnailsGrid />
  </Provider>
);

const mockDocument = {
  getPageCount: () => 10,
  getFilename: () => 'helloDarknessMyOldFriend.pdf',
  loadThumbnail: (pageNumber, callback) => (Promise.resolve(callback({ pageNumber, currentSrc: '/assets/images/192_200x300.jpeg' }))),
};

export const FileLoadedGrid = () => {
  const [selectedThumbnails, setSelectedThumbnails] = useState({});
  const onThumbnailSelected = (pageNumber) => {
    if (selectedThumbnails[pageNumber] === undefined) {
      selectedThumbnails[pageNumber] = true;
    } else {
      selectedThumbnails[pageNumber] = !selectedThumbnails[pageNumber];
    }
    setSelectedThumbnails({ ...selectedThumbnails });
  };

  const fileLoadedProps = {
    document: mockDocument,
    selectedThumbnails,
    onThumbnailSelected,
    onfileLoadedHandler: noop,
  };

  return (
    <Provider store={store}>
      <div style={{ padding: '16px' }}>
        <PageThumbnailsGrid {...fileLoadedProps} />
      </div>
    </Provider>
  );
};