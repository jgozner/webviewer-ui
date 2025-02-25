import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import NoteStateFlyout from 'components/ModularComponents/NoteStateFlyout';
import ToggleElementButton from 'components/ModularComponents/ToggleElementButton';
import DataElements from 'constants/dataElement';

const propTypes = {
  annotation: PropTypes.object.isRequired,
  handleStateChange: PropTypes.func
};

function NoteState(props) {
  const {
    annotation,
    handleStateChange = () => { },
  } = props;

  const [t] = useTranslation();

  const annotationState = annotation.getStatus();
  const icon = `icon-annotation-status-${annotationState === '' ? 'none' : annotationState.toLowerCase()}`;
  const id = annotation.Id;

  return (
    <>
      <ToggleElementButton
        dataElement={`noteState-${id}`}
        title={t('option.notesOrder.status')}
        img={icon}
        toggleElement={`${DataElements.NOTE_STATE_FLYOUT}-${id}`}
      />
      <NoteStateFlyout
        noteId={id}
        handleStateChange={handleStateChange}
      />
    </>
  );
}

NoteState.propTypes = propTypes;

export default NoteState;