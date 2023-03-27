import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getStrapiMedia } from "utils";

function ArticleContent({ content }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      onReady={(editor) => {
        editor.ui.view.toolbar.element.remove();
      }}
      data={content.replaceAll("/uploads", getStrapiMedia(`/uploads`))}
      disabled={true}
    />
  );
}

export default ArticleContent;
