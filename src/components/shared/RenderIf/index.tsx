import { Fragment, ReactNode } from 'react';

type IRenderIfProps = {
  condition: boolean;
  children: ReactNode;
};

function RenderIf({ condition, children }: IRenderIfProps) {
  if (!condition) return;

  return <Fragment>{children}</Fragment>;
}

export default RenderIf;
