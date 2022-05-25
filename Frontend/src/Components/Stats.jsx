import React from 'react';

export default function Stats(props) {
  const progress = {
    Spanish: 'progressbar__svg-circle circle-spanish shadow-spanish',
    English: 'progressbar__svg-circle circle-english shadow-english',
    Python: 'progressbar__svg-circle circle-python shadow-python',
    JavaScript: 'progressbar__svg-circle circle-js shadow-js',
    SCSS: 'progressbar__svg-circle circle-scss shadow-scss',
    React: 'progressbar__svg-circle circle-react shadow-react',
    PostgresSQL: 'progressbar__svg-circle circle-postgres shadow-postgres',
    Unity: 'progressbar__svg-circle circle-unity shadow-unity',
  };

  const text = {
    Spanish: 'progressbar__text shadow-spanish',
    English: 'progressbar__text shadow-english',
    Python: 'progressbar__text shadow-python',
    JavaScript: 'progressbar__text shadow-js',
    SCSS: 'progressbar__text shadow-scss',
    React: 'progressbar__text shadow-react',
    PostgresSQL: 'progressbar__text shadow-postgres',
    Unity: 'progressbar__text shadow-unity',
  };

  return (
    <div>
      <div className="language_circular_progress_container">
        <div className="language_grid">
          <svg className="progressbar__svg">
            <circle
              cx="40"
              cy="28"
              r="20"
              className={progress[props.title]}
            ></circle>
          </svg>
          <span className={text[props.title]}>{props.data}%</span>
        </div>
        <div className="language_title">{props.title}</div>
      </div>
    </div>
  );
}
