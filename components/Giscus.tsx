'use client'

import GiscusReact from '@giscus/react'
import { useTheme } from 'next-themes'

export function Giscus() {
  const { resolvedTheme } = useTheme()
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

  // 로컬 개발 환경에서는 Giscus 비활성화
  if (!repo || !repoId || !categoryId) {
    return (
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-blue-900 dark:text-blue-100">
          💬 <strong>Giscus 미설정</strong> - GitHub 댓글 시스템은 배포 후 활성화됩니다.
          <br />
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs">
            NEXT_PUBLIC_GISCUS_REPO_ID
          </code>
          {' 및 '}
          <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs">
            NEXT_PUBLIC_GISCUS_CATEGORY_ID
          </code>
          {' 환경변수를 설정하세요.'}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <GiscusReact
        repo={repo as `${string}/${string}`}
        repoId={repoId}
        category="Comments"
        categoryId={categoryId}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
