import React from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'quill-mention';
import mentionsManager from 'helpers/MentionsManager';
import Button from 'components/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DataElements from 'constants/dataElement';
import selectors from 'selectors';
import getRootNode from 'helpers/getRootNode';

import '../../../constants/quill.scss';
import './CommentTextarea.scss';

let globalUserData = [];

// These are the formats that will be accepted by quill
// removed images and videos
const formats = [
  'background',
  'bold',
  'color',
  'font',
  'code',
  'italic',
  'link',
  'size',
  'strike',
  'script',
  'underline',
  'blockquote',
  'header',
  'indent',
  'list',
  'align',
  'direction',
  'code-block',
  'formula',
  'mention',
];

// We override the default keyboard module to disable the list autofill feature
const Keyboard = Quill.import('modules/keyboard');

class CustomKeyboard extends Keyboard {
  static DEFAULTS = {
    ...Keyboard.DEFAULTS,
    bindings: {
      ...Keyboard.DEFAULTS.bindings,
      'list autofill': undefined,
    }
  };
}

Quill.register('modules/keyboard', CustomKeyboard, true);

// Overriding clipboard module to fix cursor issue after pasting text
const Clipboard = Quill.import('modules/clipboard');
const Delta = Quill.import('delta');
const { quillShadowDOMWorkaround } = window.Core;

class QuillPasteExtra extends Clipboard {
  constructor(quill, options) {
    quillShadowDOMWorkaround(quill);
    super(quill, options);
    this.keepSelection = options.keepSelection;
  }
  onPaste() {
    const range = this.quill.getSelection();
    const delta = new Delta().retain(range.index).delete(range.length);
    if (this.keepSelection) {
      this.quill.setSelection(range.index, delta.length(), Quill.sources.SILENT);
    } else {
      this.quill.setSelection(range.index + delta.length(), Quill.sources.SILENT);
    }
  }
}
Quill.register('modules/clipboard', QuillPasteExtra, true);

// mentionsModule has to be outside the funtion to be able to access it without it being destroyed and recreated
const mentionModule = {
  mention: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö0-9\-_]*$/,
    mentionDenotationChars: ['@', '#'],
    mentionContainerClass: 'mention__element',
    mentionListClass: 'mention__suggestions__list',
    listItemClass: 'mention__suggestions__item',
    renderItem(item) {
      // quill-mentions does not support jsx being returned
      const div = document.createElement('div');
      div.innerText = item.value;
      if (item.email) {
        const para = document.createElement('p');
        para.innerText = item.email;
        para.className = 'email';
        div.appendChild(para);
      }
      return div;
    },
    async source(searchTerm, renderList) {
      const mentionsSearchFunction = mentionsManager.getMentionLookupCallback();
      const foundUsers = await mentionsSearchFunction(globalUserData, searchTerm);
      renderList(foundUsers, searchTerm);
    }
  }
};

const CommentTextarea = React.forwardRef(
  (
    {
      value = '',
      onChange,
      onKeyDown,
      onBlur,
      onFocus,
      userData,
      isReply,
    },
    ref
  ) => {
    const [t] = useTranslation();

    const isAddReplyAttachmentDisabled = useSelector((state) => selectors.isElementDisabled(state, DataElements.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON));

    globalUserData = userData;

    const addAttachment = () => {
      getRootNode().querySelector('#reply-attachment-picker')?.click();
    };

    const onClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const onScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // Convert text with newline ("\n") to <p>...</p> format so
    // that editor handles multiline text correctly
    if (value) {
      const contentArray = value.split('\n');
      if (contentArray.length && contentArray[contentArray.length - 1] === '') {
        contentArray.pop();
        value = contentArray.map((item) => {
          const paragraph = document.createElement('p');
          paragraph.innerText = item || '\n';
          return paragraph.outerHTML;
        }).join('');
      }
    }

    // onBlur and onFocus have to be outside in the div because of quill bug
    return (
      <div className='comment-textarea' onBlur={onBlur} onFocus={onFocus} onClick={onClick} onScroll={onScroll}>
        <ReactQuill
          className='comment-textarea ql-container ql-editor'
          style={{ overflowY: 'visible' }}
          ref={(ele) => {
            if (ele) {
              ele.getEditor().root.ariaLabel = `${isReply ? t('action.reply') : t('action.comment')}`;
            }
            return ref(ele);
          }}
          modules={userData && userData.length > 0 ? mentionModule : {}}
          theme="snow"
          value={value}
          placeholder={`${isReply ? t('action.reply') : t('action.comment')}...`}
          onChange={onChange}
          onKeyDown={onKeyDown}
          formats={formats}
        />
        {isReply && !isAddReplyAttachmentDisabled &&
          <Button
            className='add-attachment'
            dataElement={DataElements.NotesPanel.ADD_REPLY_ATTACHMENT_BUTTON}
            img='ic_fileattachment_24px'
            title={`${t('action.add')} ${t('option.type.fileattachment')}`}
            onClick={addAttachment}
          />
        }
      </div>
    );
  });

CommentTextarea.displayName = 'CommentTextarea';

export default CommentTextarea;
