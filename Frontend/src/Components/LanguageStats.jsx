import React from 'react';

export default function LanguageStats(props) {
  const progress =
    props.title === 'Español'
      ? 'progressbar__svg-circle circle-html shadow-html'
      : 'progressbar__svg-circle circle-css shadow-css';

  const text =
    props.title === 'Español'
      ? 'progressbar__text shadow-html'
      : 'progressbar__text shadow-css';

  const percentage = props.title === 'Español' ? 100 : 80;

  return (
    <div>
      <div className="language_circular_progress_container">
        <div className="language_grid">
          <svg class="progressbar__svg">
            <circle cx="40" cy="28" r="20" class={progress}>
              {80}
            </circle>
          </svg>
          <span class={text}>{percentage}</span>
        </div>
        <div className="language_title">{props.title}</div>
      </div>
    </div>
  );
}
