import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './NotePanelAnnotationInfo.scss';

const propTypes = {
  annotationType: PropTypes.any,
  annotationTypeNumber: PropTypes.any
};

function NotePanelAnnotationInfo(props) {
  const { annotationType, annotationTypeNumber } = props;
  const notePanelAnnotationInfoClass = classNames('NotePanelAnnotationInfo');

  const annotInfoStyle = {
    '--annotInfo-text-color': '#f0f0f0',
  };

  return (
    <div className={notePanelAnnotationInfoClass} style={annotInfoStyle}>
      {annotationType} {annotationTypeNumber}
    </div>
  );
}


NotePanelAnnotationInfo.propTypes = propTypes;

export default NotePanelAnnotationInfo;
