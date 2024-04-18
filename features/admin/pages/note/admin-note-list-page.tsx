'use client';

import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { TagTypeEnum } from '@prisma/client';
import { useSetState } from 'ahooks';
import { isUndefined } from 'lodash-es';

import { type WithSession } from '@/types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Combobox } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';

import { BytemdViewer } from '@/components/bytemd';
import {
  IconSolarMinimalisticMagnifer,
  IconSolarRestart,
} from '@/components/icons';
import { PageHeader } from '@/components/page-header';
import { Pagination, PaginationInfo } from '@/components/pagination';

import {
  DEFAULT_PAGE_INDEX,
  DEFAULT_PAGE_SIZE,
  PATHS,
  PUBLISHED_ENUM,
  PUBLISHED_LABEL_MAP,
} from '@/constants';
import { type GetNotesDTO, useGetNotes } from '@/features/note';
import { useGetAllTags } from '@/features/tag';
import { cn, isAdmin, toFromNow, toSlashDateString } from '@/lib/utils';

import {
  AdminContentLayout,
  CreateNoteButton,
  DeleteNoteButton,
  EditNoteButton,
  ToggleNotePublishButton,
} from '../../components';

export const AdminNoteListPage = ({ session }: WithSession) => {
  const [params, updateParams] = useSetState<GetNotesDTO>({
    pageIndex: DEFAULT_PAGE_INDEX,
    pageSize: DEFAULT_PAGE_SIZE,
    order: 'desc',
    orderBy: 'createdAt',
  });

  const [inputParams, updateInputParams] = useSetState<
    Omit<GetNotesDTO, 'pageIndex' | 'pageSize'>
  >({
    body: undefined,
    published: undefined,
    tags: undefined,
  });

  const getNotesQuery = useGetNotes(params);
  const pageCount = Math.ceil(
    (getNotesQuery.data?.total ?? 0) / params.pageSize,
  );
  const data = React.useMemo(
    () => getNotesQuery.data?.notes ?? [],
    [getNotesQuery],
  );

  const getTagsQuery = useGetAllTags(TagTypeEnum.NOTE);
  const tags = React.useMemo(() => {
    return getTagsQuery.data?.tags ?? [];
  }, [getTagsQuery]);

  return (
    <AdminContentLayout
      pageHeader={
        <PageHeader
          breadcrumbList={[PATHS.ADMIN_HOME, PATHS.ADMIN_NOTE]}
          action={
            <CreateNoteButton refreshAsync={getNotesQuery.refreshAsync} />
          }
        />
      }
    >
      <div className="grid gap-4 grid-cols-4 px-2 py-4 items-end">
        <Input
          placeholder="请输入内容"
          value={inputParams.body}
          onChange={(v) =>
            updateInputParams({
              body: v.target.value,
            })
          }
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        {isAdmin(session?.user?.email) && (
          <Select
            onValueChange={(v: PUBLISHED_ENUM) =>
              updateInputParams({
                published: v,
              })
            }
            value={inputParams.published}
          >
            <SelectTrigger
              className={cn({
                'text-muted-foreground': isUndefined(inputParams.published),
              })}
            >
              <SelectValue placeholder="请选择发布状态" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={PUBLISHED_ENUM.ALL}>
                {PUBLISHED_LABEL_MAP[PUBLISHED_ENUM.ALL]}
              </SelectItem>
              <SelectItem value={PUBLISHED_ENUM.PUBLISHED}>
                {PUBLISHED_LABEL_MAP[PUBLISHED_ENUM.PUBLISHED]}
              </SelectItem>
              <SelectItem value={PUBLISHED_ENUM.NO_PUBLISHED}>
                {PUBLISHED_LABEL_MAP[PUBLISHED_ENUM.NO_PUBLISHED]}
              </SelectItem>
            </SelectContent>
          </Select>
        )}
        <Combobox
          options={
            tags?.map((el) => ({
              label: el.name,
              value: el.id,
            })) ?? []
          }
          multiple
          clearable
          selectPlaceholder="请选择标签"
          value={inputParams.tags}
          onValueChange={(v) => {
            updateInputParams({
              tags: v,
            });
          }}
        />
        <div className="flex items-center space-x-4">
          <Button onClick={handleSearch}>
            <IconSolarMinimalisticMagnifer className="mr-2" />
            搜索
          </Button>
          <Button onClick={handleReset}>
            <IconSolarRestart className="mr-2" />
            重置
          </Button>
        </div>
      </div>

      <ResponsiveMasonry
        columnsCountBreakPoints={{
          // BreakPoints https://tailwindcss.com/docs/responsive-design
          350: 1,
          // lg
          1024: 2,
          // 2xl
          1536: 3,
        }}
      >
        <Masonry gutter="1rem">
          {getNotesQuery.loading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx}>
                  <Skeleton className="h-[400px] w-full rounded-lg" />
                </div>
              ))
            : data.map((note) => (
                <div key={note.id} className="w-full">
                  <div className="w-full border rounded-lg px-6 relative pb-6">
                    <BytemdViewer body={note.body || ''} />
                    <div className="flex justify-end gap-2 flex-wrap py-4">
                      {note.tags?.map((tag) => (
                        <Badge key={tag.id}>{tag.name}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-end text-sm text-muted-foreground">
                      <span className="hidden lg:inline-block">
                        {toSlashDateString(note.createdAt)}
                      </span>
                      <span className="mx-2 hidden lg:inline-block">·</span>
                      <span>{toFromNow(note.createdAt)}</span>
                    </div>
                    <div className="absolute right-2 top-2 space-x-2">
                      <ToggleNotePublishButton
                        id={note.id}
                        published={note.published}
                        refreshAsync={getNotesQuery.refreshAsync}
                      />
                      <EditNoteButton
                        id={note.id}
                        refreshAsync={getNotesQuery.refreshAsync}
                      />
                      <DeleteNoteButton
                        id={note.id}
                        refreshAsync={getNotesQuery.refreshAsync}
                      />
                    </div>
                  </div>
                </div>
              ))}
        </Masonry>
      </ResponsiveMasonry>

      {!getNotesQuery.loading && (
        <div className="flex items-center justify-betweens">
          {pageCount > 1 && (
            <PaginationInfo
              total={getNotesQuery.data?.total}
              params={{ ...params }}
            />
          )}
          <div className="flex-1 flex items-center justify-end">
            <Pagination
              total={getNotesQuery.data?.total}
              params={{ ...params }}
              updateParams={updateParams}
              showSizeChanger
            />
          </div>
        </div>
      )}
    </AdminContentLayout>
  );

  function handleSearch() {
    updateParams({
      body: inputParams.body,
      tags: inputParams.tags,
      published: inputParams.published,
    });
  }

  function handleReset() {
    updateInputParams({
      body: '',
      published: undefined,
      tags: undefined,
    });
    updateParams({
      body: '',
      published: undefined,
      tags: undefined,
      pageIndex: DEFAULT_PAGE_INDEX,
      order: 'desc',
      orderBy: 'createdAt',
    });
  }
};
