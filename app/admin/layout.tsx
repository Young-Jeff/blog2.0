import React from 'react';

import { AdminLayout } from '@/features/admin';
import '@/styles/global.css';

export default function Layout({ children }: React.PropsWithChildren) {
  return <AdminLayout>{children}</AdminLayout>;
}
