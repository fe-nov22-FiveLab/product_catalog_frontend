import React from 'react';
import { CowGame } from '@gnosis.pm/cow-runner-game';

export const NotFoundPage: React.FC = () => (
  <div>
    <h1>404 Page not found</h1>
    <br></br>
    <p>Let&apos;s play cow game</p>
    <p>Try not to get 🥪</p>

    <CowGame />
  </div>
);
