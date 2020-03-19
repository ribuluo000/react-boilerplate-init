/*
 * LessDemoPage
 *
 */

import React from 'react';

export default function LessDemoPage() {
  return (
    <div>
      <div className="w-100 h-80 fs-12">w-100 h-80 fs-12</div>
      <div className="w-50">w-50 ellipsisellipsisellipsisellipsis</div>
      <div className="ellipsis w-50">w-50 ellipsisellipsisellipsisellipsis</div>
      <div className="w-50 h-80 wn">
        w-50 h-80 wn ellipsisellipsisellipsisellipsis
      </div>
      <div className="w-50 h-80 wb">
        w-50 h-80 wb ellipsisellipsisellipsisellipsis
      </div>
    </div>
  );
}
