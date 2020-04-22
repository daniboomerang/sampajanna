import React from 'react';
import styles from './markdown.module.css';

const PostBody = ({ contentNode }) => (
  <div className="max-w-3xl mx-auto">
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
        __html: contentNode.childMarkdownRemark.html,
      }}
    />
  </div>
);

export default PostBody;
