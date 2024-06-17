'use client';

import { Switch } from '@/components/ui/switch';

import { useToggleProjectPublish } from '@/features/project';

type ToggleProjectPublishSwitchProps = {
  id: string;
  published: boolean;
  refreshAsync: () => Promise<unknown>;
};

export const ToggleProjectPublishSwitch = ({
  id,
  published,
  refreshAsync,
}: ToggleProjectPublishSwitchProps) => {
  const toggleProjectPublishQuery = useToggleProjectPublish();

  return <Switch checked={published} onCheckedChange={handleCheckedChange} />;

  async function handleCheckedChange() {
    await toggleProjectPublishQuery.runAsync(id);
    await refreshAsync();
  }
};
