import React from 'react';

import { usePageContext } from 'context/PageContext';
import { localeDate, validateData } from 'utils';

export default function CardHeader() {
  const { data } = usePageContext();
  const { shortDate } = localeDate(data?.created_at || null, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });

  return (
    <div className="card--header">
      <div>
        <div className="card--header-image-container">
          <img
            src={data?.avatar_url}
            alt={`Avatar ${data?.login}`}
            className="card--header-image"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="card--header-title-container">
          <div>
            <h2 className="card--header-title">
              {validateData(data?.name || null, 'No name')}
            </h2>
            <a
              href={data?.html_url}
              target="_blank"
              className="text-light-accent"
              rel="noreferrer"
            >
              {data?.company}
            </a>
          </div>
          <p className="card--header-date">Joined {shortDate}</p>
        </div>
      </div>
    </div>
  );
}
