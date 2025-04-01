// components/ClientConfirmationPage.js
'use client';

import dynamic from 'next/dynamic';

const ConfirmationPage = dynamic(() => import('@/components/ConfirmationPage'), {
  ssr: false,
});

export default function ClientConfirmationPage() {
  return <ConfirmationPage />;
}
