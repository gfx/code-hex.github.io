import { ComponentType, ReactNode } from 'react';
import { PreviewItem, PreviewNoteProps } from '~/components/PreviewNote';
import { useEffect } from 'react';
import Prism from 'prismjs';

export interface NoteItemsProps {
  title: string;
  items: PreviewItem[];
  Preview: ComponentType<PreviewNoteProps>;
  children: ReactNode;
}

export const NoteItems = ({
  title,
  items,
  Preview,
  children,
}: NoteItemsProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="w-full mx-auto antialiased max-w-3xl xl:max-w-5xl">
      <div className="mx-8 sm:mx-10 md:mx-12 py-10">
        <main role="main" className="divide-y divide-gray-200">
          <div className="py-4">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
              {title}
            </h1>
            {children}
          </div>
          <div aria-label="preview" className="mx-auto">
            <Preview items={items} />
          </div>
        </main>
      </div>
    </div>
  );
};
