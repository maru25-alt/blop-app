import React, { Component } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import { PropTypes } from 'prop-types';

export class EditRichText extends Component {
    handleChange = (e) => {
         this.props.handleChange(e.target.editorState)
    }
    render() {
        const {body} = this.props;
        const blocksFromHtml = htmlToDraft(body);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        return (
            <div>
               <Editor
                editorState={editorState}
                placeholder='start type here....' 
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.handleChange}
              /> 
            </div>
        )
    }
}

EditRichText.propTypes = {
    body: PropTypes.string.isRequired
  };

export default EditRichText
