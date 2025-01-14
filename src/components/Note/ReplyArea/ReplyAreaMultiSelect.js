import React, { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';
import NoteTextarea from 'components/NoteTextarea';
import classNames from 'classnames';
import core from 'core';
import mentionsManager from 'helpers/MentionsManager';
import setAnnotationRichTextStyle from 'helpers/setAnnotationRichTextStyle';
import selectors from 'selectors';
import Button from 'src/components/Button';

import './ReplyAreaMultiSelect.scss';

// a component that contains the reply textarea, the reply button and the cancel button
const ReplyArea = ({ annotations, onSubmit, onClose }) => {
  const [
    isMentionEnabled,
    activeDocumentViewerKey,
    customizableUI,
  ] = useSelector(
    (state) => [
      selectors.getIsMentionEnabled(state),
      selectors.getActiveDocumentViewerKey(state),
      selectors.getFeatureFlags(state)?.customizableUI,
    ],
    shallowEqual
  );

  const [pendingReply, setPendingReply] = useState('');
  const [t] = useTranslation();
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const postReply = (e) => {
    // prevent the textarea from blurring out
    e.preventDefault();

    const editor = textareaRef.current.getEditor();
    const replyText = mentionsManager.getFormattedTextFromDeltas(editor.getContents());

    if (!replyText.trim()) {
      return;
    }
    annotations.forEach((annotation) => {
      if (isMentionEnabled) {
        const replyAnnotation = mentionsManager.createMentionReply(annotation, replyText);
        core.addAnnotations([replyAnnotation], activeDocumentViewerKey);
        setAnnotationRichTextStyle(editor, replyAnnotation);
      } else {
        // TODO: This is bugged and does not work. createAnnotationReply
        // does not return an annotation
        const replyAnnotation = core.createAnnotationReply(annotation, replyText, activeDocumentViewerKey);
        setAnnotationRichTextStyle(editor, replyAnnotation);
      }
    });

    onSubmit();
  };

  const replyAreaClass = classNames({
    'reply-area': true,
  });

  const handleNoteTextareaChange = (value) => {
    setPendingReply(value);
  };

  return (
    <div className={classNames({
      'reply-area-multi-container': true,
      'modular-ui': customizableUI,
    })}>
      <div
        className="reply-area-multi-header"
      >
        <div className="title">
          {t('action.multiReplyAnnotations', { count: annotations.length })}
        </div>
        <Button
          className="close-icon"
          onClick={onClose}
          img='ic_close_black_24px'
        />
      </div>
      <form onSubmit={postReply} >
        <div
          className={replyAreaClass}
          // stop bubbling up otherwise the note will be closed
          // due to annotation deselection
          onMouseDown={(e) => e.stopPropagation()}
        >
          <NoteTextarea
            ref={(el) => {
              textareaRef.current = el;
            }}
            value={pendingReply}
            onChange={(value) => handleNoteTextareaChange(value)}
            isReply
          />
        </div>
        <div className='reply-button-container'>
          <Button
            img="icon-post-reply"
            className={'reply-button'}
            title={'action.submit'}
            isSubmitType={true}
          />
        </div>
      </form>
    </div>
  );
};

export default ReplyArea;
