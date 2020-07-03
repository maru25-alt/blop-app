import React, { Component } from 'react'
import { EditorState, ContentState  } from 'draft-js';
import { PropTypes } from 'prop-types';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

export class ReadRichText extends Component {
    state = {
        editorState: EditorState.createEmpty(),
      }
    render() {
        const { body } = this.props;
        const blocksFromHtml = htmlToDraft(body);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        console.log(editorState)
        return (
            <div className='card-panel'>
               
              <Editor
                editorState={editorState}
                readOnly
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
               toolbarHidden= "true"
                />
            </div>
        )
    }
}

ReadRichText.propTypes = {
    body: PropTypes.string.isRequired
  };

export default ReadRichText
