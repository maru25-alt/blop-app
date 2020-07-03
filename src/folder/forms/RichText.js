import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

export class RichText extends Component {
    state = {
        html: '',
        editorState :  EditorState.createEmpty(),
    }
    handleChange = (editorState) => {
        this.setState({
            editorState,
        })
        var text =  draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log(text)
        this.props.handleRichTextChange(text)
    }
    render() {
        const {editorState} = this.state;
        return (
            <div className='card-panel'>
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
export default RichText
