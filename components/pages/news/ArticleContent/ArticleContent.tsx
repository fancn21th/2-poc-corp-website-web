import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getStrapiMedia } from "utils";
import styled from "styled-components";

const ArticleContentWrapper = styled.div`
  position: relative;
  padding-top: 60px;
`;

const StyledCKEditor = styled.div`
  width: 66.6666666667%;
  margin: 0 auto;

  * {
    border-color: white !important;
  }
`;

function ArticleContent({ content }) {
  return (
    <ArticleContentWrapper>
      <StyledCKEditor>
        <CKEditor
          editor={ClassicEditor}
          onReady={(editor) => {
            editor.ui.view.toolbar.element.remove();
          }}
          data={content.replaceAll("/uploads", getStrapiMedia(`/uploads`))}
          disabled={true}
        />
      </StyledCKEditor>
    </ArticleContentWrapper>
  );
}

export default ArticleContent;
